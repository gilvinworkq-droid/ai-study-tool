import { claudeClient } from "./claude";
import { openaiClient } from "./openai";

const provider = process.env.AI_PROVIDER || "claude";

export function getAIClient() {
  if (provider === "openai") {
    return {
      provider: "openai",
      client: openaiClient,
    };
  }

  return {
    provider: "claude",
    client: claudeClient,
  };
}
