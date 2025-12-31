import {
  createUIMessageStream,
  createUIMessageStreamResponse,
  streamText,
  convertToModelMessages,
  UIMessage,
  type LanguageModelUsage,
} from 'ai';
import { google } from "@ai-sdk/google";
import { z } from 'zod';
import { generateObject } from 'ai';
import { CONTEXTS, ContextKey } from '../../database/topic_context';
import { NextResponse } from 'next/server';

const detectTopic = async(question: string) => {
  const { object } = await generateObject({
    model: google("gemini-2.5-flash"),
    schema: z.object({
      topic: z.string()
    }),
    prompt: `detect topic of this question: ${question}
    here is list of topics: [Other, Electric & Magnetic Fields, Gravitational Fields, Laws of Motion, Proteins, Stem Cells]`,
  });

  return object.topic;
}

export async function POST(req: Request) {
    const { message }: { message: string } = await req.json();

    // If the last user message exists, fetch context for it
    const topic = await detectTopic(message);

    return NextResponse.json({ topic });
}
