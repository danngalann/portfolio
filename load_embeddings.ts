import weaviate from "weaviate-client";
import { WeaviateStore } from "@langchain/weaviate";
import { v4 as uuidv4 } from "uuid";
import type { Document } from "@langchain/core/documents";
import { OllamaEmbeddings } from "@langchain/ollama";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";

async function main() {
  // --- 1. Connect to local Weaviate ---
  const client = await weaviate.connectToLocal({
    port: 1564,
  });

  // --- 2. Embeddings model ---
  const embeddings = new OllamaEmbeddings({
    model: "mxbai-embed-large:335m",
  });

  // --- 3. Create Vector Store ---
  const vectorStore = new WeaviateStore(embeddings, {
    client,
    indexName: "Docs",
  });

  // --- 4. Define your documents here ---
  const documents: Document[] = [
    {
      pageContent:
        "Necsia was my first serious job as a developer. At the time I  was looking for internships as part of my curriculum for my  studies at Vallbona. I consciously picked an internship  modality available at my school where you were required to  work more hours, receiving pay in exchange. To be more  specific, these were year-long internships instead of the  regular three-month internship usually offered in most Spanish  degree programs. The longer duration meant more experience and  the possibility of getting hired afterwards (COVID had other  ideas, but more on that later). The pay meant I was expected  to perform at a higher level of responsibility than a regular  intern.  It was their recruitment team that found me and contacted me  via LinkedIn. Back then, on-site interviews were still in  fashion, and I went through a single interview before being  hired. The position was fully on-site, in the offices of the  World Trade Center in Barcelona. Getting my first serious job  in a glass maze with views of the sea was quite an  experience—especially when the police started raiding the  place for suspected drug trafficking (the offices are next to  the port). But thats a story for another day over  coffee.  When I started, a mountain of onboarding documents landed on  my desk. After reading them all (and even understanding some  parts) I was given database access and began working. My task  was to develop and maintain a Java application with a small UI  utility that managed data migrations between several database  engines for Aigües de Barcelona (now Agbar Group).  The application was massive, full of legacy code and extensive  documentation, and overseen by a senior developer who knew the  entire system by heart. Our small team implemented new  features and fixed bugs while documenting nearly every change.  I dont recall any version control system being in place,  so documentation was crucial for tracking progress.  As my internship was nearing its end, COVID hit hardest.  Remote work became a necessity, so we were allowed to take our  laptops home and were given VPN access to work remotely. This  was my first experience with remote work. The tasks remained  mostly the same, but communication suffered; our team  wasnt used to asynchronous coordination and relied  solely on basic messaging software.  The ending took a darker turn. I was under the impression the  company planned to hire me after my internship, yet once my  contract ended, I heard nothing for weeks until an email  arrived instructing me to return my company laptop by mail. I  never received a clear explanation, but I suspect the company  reconsidered its team size due to the uncertainty of the COVID  period.  Necsia was my first development experience, my first remote  work experience, and my first ghosting experience. The lessons  learned and the confidence gained in that single year would  later open doors to new opportunities across different teams,  stacks, and sectors.",
      metadata: { tag: "example" },
    },
    {
      pageContent:
        "By the end of 2022, I was contacted by a recruitment  consultant working for Delectatech, an AI startup in the food  service industry. The role was similar to what I was already  doing (a backend position using Symfony) but it came with the  chance to work in AI and data science, something I had been  seeking for some time. I saw an opportunity to pivot my  specialization, so I left  Perception    and, in 2023, started a new journey.  During the first few weeks, I was onboarded by a senior data  engineer who introduced me to the companys data and AI  operations. I was also trained on the backend and frontend of  our SaaS platform. My role would involve both areas: the  full-stack application as part of my formal responsibilities,  and the data processes as part of my desired career path.  In practice, I ended up leaning more toward full-stack  development. The senior data engineer left the company shortly  after I joined and was replaced by two juniors who had been  onboarded at the same time as me. Theyve grown into  their roles and now handle all data-related tasks.  It was enlightening to realize that, after actively pursuing a  role in AI and data science, I actually preferred software  development. Now, the Data team handles most of the data work,  and I only step in when more hands are needed, or focus on  strictly AI-related tasks such as generative AI implementation  and model training.  Work in a startup is highly dynamic. Priorities change  constantly, and you need to manage frustration over unfinished  projects while finding satisfaction in the tasks you complete  and the lessons you learn. Learning opportunities are  plentiful. At Delectatech, Ive faced challenges ranging  from pesky, hard-to-debug issues to distributed AI-powered  processing of large data volumes.  Its also common in startups to take on multiple roles.  What began as a backend-focused position has evolved into a  full-stack role with AI-related tasks. Ive moved from  Symfony and PHP to FastAPI with Python and NestJS with Node.  Building on the server knowledge I gained during my studies  and at  Perception  , Ive built CI/CD pipelines with Jenkins and GitHub  Actions to improve iteration speed, execute automated tests,  and build Docker images for deployment on VPS instances.  The wide range of roles and challenges has helped me build a  diverse technology stack. Ive worked on projects in  React and Angular on the frontend and with three different  backend frameworks. Ive used both relational and  non-relational databases, such as PostgreSQL and MongoDB,  along with specialized data-storage systems like Redis for  caching and Elasticsearch for fast retrieval of data.  Ive also implemented distributed task handling with  RabbitMQ and developed agentic AI solutions using PyTorch,  PydanticAI, and LangChain.  The company is now expanding internationally, which brings a  new set of challenges were actively tackling. Im  currently learning cloud technologies to help us scale  efficiently and adding some more DevOps responsibilities to my  skill set. Ive also taken on more responsibility as a  project manager for fast-paced project iterations, leading a  small cross-functional team of developers, data specialists,  and product professionals.",
      metadata: { tag: "example" },
    },
  ];

  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 500, // recommended for Ollama embedding models
    chunkOverlap: 100, // safe overlap for semantic continuity
  });

  // Split all documents
  const chunkedDocs = await splitter.splitDocuments(documents);

  const ids = chunkedDocs.map(() => uuidv4());

  console.log(`Generated ${chunkedDocs.length} chunks.`);
  console.log("Embedding and inserting chunks...");

  await vectorStore.addDocuments(chunkedDocs, { ids });

  console.log("Done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
