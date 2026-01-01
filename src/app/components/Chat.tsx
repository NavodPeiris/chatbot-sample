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
  PromptInputSelect,
  PromptInputSelectContent,
  PromptInputSelectItem,
  PromptInputSelectTrigger,
  PromptInputSelectValue,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputFooter,
  PromptInputTools,
} from '@/components/ai-elements/prompt-input';
import { useEffect, useState } from 'react';
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
  ContextContentHeader,
  ContextInputUsage,
  ContextOutputUsage,
  ContextReasoningUsage,
  ContextTrigger,
} from "@/components/ai-elements/context";
import { Loader } from '@/components/ai-elements/loader';
import { DefaultChatTransport, LanguageModelUsage, UIMessage } from 'ai';
import { Button } from '@/components/ui/button';
import { levelId, levels } from '../database/data';
import { SUBJECT_TOPICS } from '../database/data';
import { Suggestion, Suggestions } from '@/components/ai-elements/suggestion';


export type MyUIMessage = UIMessage<
  never, // metadata type
  {
    usage: LanguageModelUsage;
  } // data parts type
>;

const ChatGeneral = () => {

  const [subList, setSubList] = useState<{
    name: string;
    value: string;
    topics: {
      name: string;
      value: string;
    }[]
  }[]>([]);
  
  const [topicList, setTopicList] = useState<{
    name: string;
    value: string;
  }[]>([]);

  const SESSION_KEY = 'chat'

  const [input, setInput] = useState('');
  const [level, setLevel] = useState<string>('none');
  const [subject, setSubject] = useState<string>('none');
  const [topic, setTopic] = useState<string>('none');
  const [detectedTopic, setDetectedTopic] = useState<string>('none');

  // Restore messages from sessionStorage
  const initialMessages =
    typeof window !== 'undefined'
      ? JSON.parse(
          sessionStorage.getItem(SESSION_KEY) || '[]'
        )
      : [];

  const {
    messages,
    sendMessage,
    status,
    regenerate,
  } = useChat({
    messages: initialMessages,
    transport: new DefaultChatTransport({
      api: '/api/chat',
    }),
  });

  const resetSelection = () => {
    setLevel('none');
    setSubject('none');
    setTopic('none');
    setSubList([]);
    setTopicList([]);
    setDetectedTopic('none')
  }

  useEffect(() => {
    if (messages.length > 0) {
      sessionStorage.setItem(SESSION_KEY, JSON.stringify(messages));
    }
  }, [messages]);



  const handleSubmit = async(message: PromptInputMessage) => {
    const hasText = Boolean(message.text);
    const hasAttachments = Boolean(message.files?.length);
    if (!(hasText || hasAttachments)) {
      return;
    }

    let topicToSend = topic;

    if(detectedTopic !== 'none'){
      topicToSend = detectedTopic;
    }

    if(topicToSend === 'none' || topicToSend === ''){
      console.log("messages: ", messages)
      const detectedTopic = await fetch('http://localhost:3000/api/topicDetection', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: message.text,
        }),
      });

      const data = await detectedTopic.json();
      setDetectedTopic(data.topic);
      setTopic(data.topic);
      topicToSend = data.topic;
    }

    sendMessage(
      { 
        text: message.text || 'Sent with attachments',
        files: message.files 
      },
      {
        body: {
          topic: topicToSend,
          level: level
        },
      }
    );
    setInput('');
  };

  const getCostData = (message: MyUIMessage) => {
    const costPart = message.parts.filter(part => part.type === 'data-usage');
    if(costPart.length){
      return costPart[0].data;
    }
    return;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 relative size-full h-[600px]">
      <div className="flex flex-col h-full">
        <Conversation className="h-full outline-1 rounded-lg">
          <ConversationContent>
            {messages.map((message, i) => (
              <div key={message.id}>
                {message.role === 'assistant' && message.parts.filter((part) => part.type === 'source-url').length > 0 && (
                  <Sources>
                    <SourcesTrigger
                      count={
                        message.parts.filter(
                          (part) => part.type === 'source-url',
                        ).length
                      }
                    />
                    {message.parts.filter((part) => part.type === 'source-url').map((part, i) => (
                      <SourcesContent key={`${message.id}-${i}`}>
                        <Source
                          key={`${message.id}-${i}`}
                          href={part.url}
                          title={part.url}
                        />
                      </SourcesContent>
                    ))}
                  </Sources>
                )}
                {message.parts.map((part) => {
                  const costData = getCostData(message as MyUIMessage);
                  switch (part.type) {
                    case 'text':
                      return (
                        <Message key={`${message.id}-${i}`} from={message.role}>
                          <MessageContent>
                            <MessageResponse>
                              {part.text}
                            </MessageResponse>
                          </MessageContent>
                          {message.role === 'assistant' && i === messages.length - 1 && (
                            <MessageActions>
                              <MessageAction
                                onClick={() => regenerate()}
                                label="Retry"
                              >
                                <RefreshCcwIcon className="size-3" />
                              </MessageAction>
                              <MessageAction
                                onClick={() =>
                                  navigator.clipboard.writeText(part.text)
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
                          key={`${message.id}-${i}`}
                          className="w-full"
                          isStreaming={status === 'streaming' && i === message.parts.length - 1 && message.id === messages.at(-1)?.id}
                        >
                          <ReasoningTrigger />
                          <ReasoningContent>{part.text}</ReasoningContent>
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
        <br />
        <Suggestions>
          {(topic === 'none' || topic === '') && (detectedTopic !== 'none') && (
            <Suggestion
              suggestion={`detected topic: ${detectedTopic}`}
            />
          )}
        </Suggestions>

        <PromptInput onSubmit={handleSubmit} className="mt-4" globalDrop multiple>
          <PromptInputHeader>
            <PromptInputAttachments>
              {(attachment) => <PromptInputAttachment data={attachment} />}
            </PromptInputAttachments>
          </PromptInputHeader>
          <PromptInputBody>
            <PromptInputTextarea
              onChange={(e) => setInput(e.target.value)}
              value={input}
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
              <h2>Level:</h2>
              <PromptInputSelect
                onValueChange={(value) => {
                  setLevel(value);
                  setSubject('none')
                  setSubList(SUBJECT_TOPICS[value as levelId]);
                }}
                value={level}
              >
                <PromptInputSelectTrigger>
                  <PromptInputSelectValue />
                </PromptInputSelectTrigger>
                <PromptInputSelectContent>
                  {levels.map((level) => (
                    <PromptInputSelectItem key={level.value} value={level.value}>
                      {level.name}
                    </PromptInputSelectItem>
                  ))}
                </PromptInputSelectContent>
              </PromptInputSelect>

              <h2>Subject:</h2>
              <PromptInputSelect
                onValueChange={(value) => {
                  setSubject(value);
                  setTopic('none');
                  const topicList = subList.filter((sub) => sub.value === value)[0].topics;
                  setTopicList(topicList);
                }}
                value={subject}
              >
                <PromptInputSelectTrigger>
                  <PromptInputSelectValue />
                </PromptInputSelectTrigger>
                <PromptInputSelectContent>
                  {subList.map((subject) => (
                    <PromptInputSelectItem key={subject.value} value={subject.value}>
                      {subject.name}
                    </PromptInputSelectItem>
                  ))}
                </PromptInputSelectContent>
              </PromptInputSelect>

              <h2>Topic:</h2>
              <PromptInputSelect
                onValueChange={(value) => {
                  setTopic(value);
                }}
                value={topic}
              >
                <PromptInputSelectTrigger>
                  <PromptInputSelectValue />
                </PromptInputSelectTrigger>
                <PromptInputSelectContent>
                  {topicList.map((topic) => (
                    <PromptInputSelectItem key={topic.value} value={topic.value}>
                      {topic.name}
                    </PromptInputSelectItem>
                  ))}
                </PromptInputSelectContent>
              </PromptInputSelect>

              <Button type='button' onClick={resetSelection} size={'sm'} className='hover:cursor-pointer'>Reset</Button>
            </PromptInputTools>
            <PromptInputSubmit disabled={!input && !status} status={status} />
          </PromptInputFooter>
        </PromptInput>
      </div>
    </div>
  );
};
export default ChatGeneral;