import weaviate from "weaviate-client";
import { WeaviateStore } from "@langchain/weaviate";
import { OllamaEmbeddings } from "@langchain/ollama";

async function main() {
  // --- Connect to local Weaviate ---
  const client = await weaviate.connectToLocal({
    port: 1564,
  });

  // --- Embeddings (same as ingestion script) ---
  const embeddings = new OllamaEmbeddings({
    model: "mxbai-embed-large:335m",
  });

  // --- Vector store reference (must match indexName used during ingestion) ---
  const vectorStore = new WeaviateStore(embeddings, {
    client,
    indexName: "Docs",
  });

  // --- Query ---
  const query = "Why did Daniel pick an internship at Necsia?";

  const nResults = 1;

  console.log(`Searching for: "${query}"`);
  const results = await vectorStore.similaritySearch(query, nResults);

  console.log(`\nTop ${nResults} results:`);
  for (const doc of results) {
    console.log("----");
    console.log("Content:", doc.pageContent);
    console.log("Metadata:", doc.metadata);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
