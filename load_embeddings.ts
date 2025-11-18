import weaviate, { WeaviateClient } from "weaviate-client";
import { WeaviateStore } from "@langchain/weaviate";
import { v4 as uuidv4 } from "uuid";
import type { Document } from "@langchain/core/documents";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { OpenAIEmbeddings } from "@langchain/openai";
import dotenv from "dotenv";
import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface Dictionary {
  projects: {
    items: Record<string, { description: string }>;
  };
  career: {
    aboutMeParagraphs: string[];
  };
  experienceDetails: Record<
    string,
    {
      experienceParagraphs: string[];
    }
  >;
}

function loadDictionary(lang: string): Dictionary {
  const filePath = path.join(__dirname, "dictionaries", `${lang}.json`);
  const content = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(content);
}

function extractDocuments(dict: Dictionary, lang: string): Document[] {
  const documents: Document[] = [];

  // Extract project descriptions
  for (const [projectKey, project] of Object.entries(dict.projects.items)) {
    documents.push({
      pageContent: project.description,
      metadata: { type: "project", key: projectKey, lang },
    });
  }

  // Extract career about me paragraphs (concatenated)
  const aboutMeText = dict.career.aboutMeParagraphs.join(" ");
  documents.push({
    pageContent: aboutMeText,
    metadata: { type: "career", section: "aboutMe", lang },
  });

  // Extract experience paragraphs for each company (concatenated)
  for (const [company, details] of Object.entries(dict.experienceDetails)) {
    const experienceText = details.experienceParagraphs.join(" ");
    documents.push({
      pageContent: experienceText,
      metadata: { type: "experience", company, lang },
    });
  }

  return documents;
}

async function loadCorpusForLanguage(
  client: WeaviateClient,
  embeddings: OpenAIEmbeddings,
  lang: string,
) {
  console.log(`\n--- Processing language: ${lang.toUpperCase()} ---`);

  // Load dictionary for this language
  const dict = loadDictionary(lang);

  // Extract documents from dictionary
  const documents = extractDocuments(dict, lang);

  console.log(`Extracted ${documents.length} documents for ${lang}`);

  // Create vector store for this language
  const vectorStore = new WeaviateStore(embeddings, {
    client,
    indexName: `corpus_${lang}`,
  });

  // Text splitter
  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 500,
    chunkOverlap: 100,
  });

  // Split all documents
  const chunkedDocs = await splitter.splitDocuments(documents);
  const ids = chunkedDocs.map(() => uuidv4());

  console.log(`Generated ${chunkedDocs.length} chunks for ${lang}`);
  console.log("Embedding and inserting chunks...");

  await vectorStore.addDocuments(chunkedDocs, { ids });

  console.log(`✓ Done loading corpus for ${lang}`);
}

async function main() {
  // --- 1. Connect to local Weaviate ---
  const client = await weaviate.connectToLocal({
    port: 1564,
  });

  // --- 2. Embeddings model ---
  const embeddings = new OpenAIEmbeddings({
    model: process.env.EMBEDDING_MODEL,
    configuration: {
      baseURL: process.env.BASE_URL,
      apiKey: process.env.OPENROUTER_API_KEY,
    },
  });

  // --- 3. Load corpus for each language ---
  const languages = ["en", "es"];

  for (const lang of languages) {
    await loadCorpusForLanguage(client, embeddings, lang);
  }

  console.log("\n✓ All corpora loaded successfully!");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
