import Anthropic from "@anthropic-ai/sdk";

const apiKey = process.env.CLAUDE_API_KEY!;

export const claudeClient = new Anthropic({
  apiKey,
});

// Example helper if you want structured calls later:
export async function claudeChat(prompt: string) {
  const resp = await claudeClient.messages.create({
    model: "claude-3-5-sonnet-20240620",
    max_tokens: 1024,
    messages: [{ role: "user", content: prompt }],
  });

  return resp;
}
