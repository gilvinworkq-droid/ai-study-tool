import OpenAI from "openai";

const apiKey = process.env.OPENAI_API_KEY!;

export const openaiClient = new OpenAI({
  apiKey,
});

// Example helper for parity:
export async function openaiChat(prompt: string) {
  const resp = await openaiClient.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
  });

  return resp;
}
