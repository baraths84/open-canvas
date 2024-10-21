import { Client } from "@langchain/langgraph-sdk";

export const createClient = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3000/api";
  const apiKey = process.env.LANGCHAIN_API_KEY;
   if (!apiKey) {
    throw new Error("LANGCHAIN_API_KEY environment variable is not set");
  }

  return new Client({
    apiUrl,
    apiKey,
  });
};
