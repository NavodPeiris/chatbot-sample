'use client';

import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from '@/components/ai-elements/conversation';
import {
  Message,
  MessageContent,
  MessageResponse,
  MessageActions,
  MessageAction,
} from '@/components/ai-elements/message';
import {
  PromptInput,
  PromptInputActionAddAttachments,
  PromptInputActionMenu,
  PromptInputActionMenuContent,
  PromptInputActionMenuTrigger,
  PromptInputAttachment,
  PromptInputAttachments,
  PromptInputBody,
  PromptInputButton,
  PromptInputHeader,
  type PromptInputMessage,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputFooter,
  PromptInputTools,
} from '@/components/ai-elements/prompt-input';
import { useEffect, useRef, useState } from 'react';
import { useChat } from '@ai-sdk/react';
import { CopyIcon, RefreshCcwIcon } from 'lucide-react';
import {
  Source,
  Sources,
  SourcesContent,
  SourcesTrigger,
} from '@/components/ai-elements/sources';
import {
  Reasoning,
  ReasoningContent,
  ReasoningTrigger,
} from '@/components/ai-elements/reasoning';
import {
  Context,
  ContextCacheUsage,
  ContextContent,
  ContextContentBody,
  ContextContentFooter,
  ContextInputUsage,
  ContextOutputUsage,
  ContextTrigger,
} from '@/components/ai-elements/context';
import { Loader } from '@/components/ai-elements/loader';
import {
  DefaultChatTransport,
  LanguageModelUsage,
  UIMessage,
} from 'ai';
import { TOPICS, QId } from '../database/question_topic';
import { usePathname } from 'next/navigation';

export type MyUIMessage = UIMessage<
  never,
  {
    usage: LanguageModelUsage;
  }
>;

const sessionKey = (questionId: string) =>
  `chatQuestion:${questionId}`;

const ChatQuestion = ({ questionId }: { questionId: string }) => {
  const [input, setInput] = useState('');

  // Restore messages from sessionStorage
  const initialMessages =
    typeof window !== 'undefined'
      ? JSON.parse(
          sessionStorage.getItem(sessionKey(questionId)) || '[]'
        )
      : [];

  const {
    messages,
    sendMessage,
    status,
    regenerate,
    setMessages,
  } = useChat({
    messages: initialMessages,
    transport: new DefaultChatTransport({
      api: '/api/chatQuestion',
    }),
  });

  // Persist messages to sessionStorage
  useEffect(() => {
    if (messages.length > 0) {
      sessionStorage.setItem(
        sessionKey(questionId),
        JSON.stringify(messages)
      );
    }
  }, [messages, questionId]);


  const handleSubmit = (message: PromptInputMessage) => {
    const hasText = Boolean(message.text);
    const hasAttachments = Boolean(message.files?.length);

    if (!(hasText || hasAttachments)) return;

    sendMessage(
      {
        text: message.text || 'Sent with attachments',
        files: message.files,
      },
      {
        body: {
          topic: TOPICS[questionId as QId],
        },
      }
    );

    setInput('');
  };

  const getCostData = (message: MyUIMessage) => {
    const part = message.parts.find(
      (p) => p.type === 'data-usage'
    );
    return part?.data;
  };

  return (
    <div className="max-w-4xl mx-8 relative size-full h-[600px]">
      <div className="flex flex-col h-full">
        <Conversation className="h-full outline-1 rounded-lg">
          <ConversationContent>
            {messages.map((message, i) => (
              <div key={message.id}>
                {message.role === 'assistant' &&
                  message.parts.some(
                    (p) => p.type === 'source-url'
                  ) && (
                    <Sources>
                      <SourcesTrigger
                        count={message.parts.filter(
                          (p) => p.type === 'source-url'
                        ).length}
                      />
                      {message.parts
                        .filter((p) => p.type === 'source-url')
                        .map((part, idx) => (
                          <SourcesContent
                            key={`${message.id}-${idx}`}
                          >
                            <Source
                              href={part.url}
                              title={part.url}
                            />
                          </SourcesContent>
                        ))}
                    </Sources>
                  )}

                {message.parts.map((part, idx) => {
                  const costData = getCostData(
                    message as MyUIMessage
                  );

                  switch (part.type) {
                    case 'text':
                      return (
                        <Message
                          key={`${message.id}-${idx}`}
                          from={message.role}
                        >
                          <MessageContent>
                            <MessageResponse>
                              {part.text}
                            </MessageResponse>
                          </MessageContent>

                          {message.role === 'assistant' &&
                            i === messages.length - 1 && (
                              <MessageActions>
                                <MessageAction
                                  onClick={() => regenerate()}
                                  label="Retry"
                                >
                                  <RefreshCcwIcon className="size-3" />
                                </MessageAction>

                                <MessageAction
                                  onClick={() =>
                                    navigator.clipboard.writeText(
                                      part.text
                                    )
                                  }
                                  label="Copy"
                                >
                                  <CopyIcon className="size-3" />
                                </MessageAction>

                                {costData && (
                                  <Context
                                    modelId="google:gemini-2.5-flash"
                                    usage={costData}
                                  >
                                    <ContextTrigger />
                                    <ContextContent>
                                      <ContextContentBody>
                                        <ContextInputUsage />
                                        <ContextOutputUsage />
                                        <ContextCacheUsage />
                                      </ContextContentBody>
                                      <ContextContentFooter />
                                    </ContextContent>
                                  </Context>
                                )}
                              </MessageActions>
                            )}
                        </Message>
                      );

                    case 'reasoning':
                      return (
                        <Reasoning
                          key={`${message.id}-${idx}`}
                          className="w-full"
                          isStreaming={
                            status === 'streaming' &&
                            idx === message.parts.length - 1 &&
                            message.id ===
                              messages.at(-1)?.id
                          }
                        >
                          <ReasoningTrigger />
                          <ReasoningContent>
                            {part.text}
                          </ReasoningContent>
                        </Reasoning>
                      );

                    default:
                      return null;
                  }
                })}
              </div>
            ))}
            {status === 'submitted' && <Loader />}
          </ConversationContent>
          <ConversationScrollButton />
        </Conversation>

        <PromptInput
          onSubmit={handleSubmit}
          className="mt-4"
          globalDrop
          multiple
        >
          <PromptInputHeader>
            <PromptInputAttachments>
              {(attachment) => (
                <PromptInputAttachment data={attachment} />
              )}
            </PromptInputAttachments>
          </PromptInputHeader>

          <PromptInputBody>
            <PromptInputTextarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </PromptInputBody>

          <PromptInputFooter>
            <PromptInputTools>
              <PromptInputActionMenu>
                <PromptInputActionMenuTrigger />
                <PromptInputActionMenuContent>
                  <PromptInputActionAddAttachments />
                </PromptInputActionMenuContent>
              </PromptInputActionMenu>
            </PromptInputTools>

            <PromptInputSubmit
              disabled={!input && !status}
              status={status}
            />
          </PromptInputFooter>
        </PromptInput>
      </div>
    </div>
  );
};

export default ChatQuestion;
