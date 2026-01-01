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
import { CONTEXTS, ContextKey, CONTEXTS_SECONDARY, SecContextKey } from '../../database/topic_context';

export type MyUIMessage = UIMessage<
  never, // metadata type
  {
    usage: LanguageModelUsage;
  } // data parts type
>;

const fetchContext = async(topic: string, level: string) => {
  let context = ''
  if(level == 'secondary'){
    context = CONTEXTS_SECONDARY[topic as SecContextKey];
  }
  else{
    context = CONTEXTS[topic as ContextKey];
  }

  console.log("detected topic: ", topic)
  //console.log("context used: ", context)
  return context;
}

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages, topic, level }: { messages: UIMessage[], topic: string, level: string } = await req.json();

  console.log("level: ", level)

  // Convert user messages to model format
  const modelMessages = await convertToModelMessages(messages);

  const contextText = await fetchContext(topic, level)

  const stream = createUIMessageStream<MyUIMessage>({
    execute: ({ writer }) => {
      // Append context as a system instruction or assistant preamble
      const result = streamText({
          system: `
          You are an experienced educator in Singapore, dedicated to answer educational questions asked by students. You are provided with a syllabus context which might help you answer the question and try to stick within the scope outlined by the syllabus context.

          context: ${contextText}
          `,
          model: google("gemini-2.5-flash"),
          messages: modelMessages,
          async onFinish(){
            writer.write({
              type: 'data-usage',
              data: await result.totalUsage,
            });
          }
      });

      writer.merge(result.toUIMessageStream());
    }
  })

    return createUIMessageStreamResponse({ stream });
}
