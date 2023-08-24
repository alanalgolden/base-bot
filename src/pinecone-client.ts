import { PineconeClient } from "@pinecone-database/pinecone";
import { appConfig } from "../config.edge.ts";

export const pineconeClient = new PineconeClient();

pineconeClient.init({
  apiKey: appConfig.PINECONE_API_KEY,
  environment: appConfig.PINECONE_ENVIRONMENT,
});

export const verifyPineconeClient = async () => {
  if (pineconeClient.Index.name) {
    console.log("Pinecone client is initialized and ready!");
    console.log(pineconeClient.Index.name);
  } else {
    console.error("Failed to initialize Pinecone client!");
    console.log(pineconeClient.Index.name);
  }
};
