import Link from 'next/link';
import { QUESTIONS } from './database/questions';
import { Card, CardAction, CardDescription, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex flex-col gap-2 min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className='text-xl font-bold'>Questions</h1>
      {Object.entries(QUESTIONS).map(([id, question]) => (
        <div key={id}>
          <Card className="w-[300px]">
            <CardHeader>
              <CardDescription>
                {question.length > 50 ? question.slice(0, 50) + "…" : question}
              </CardDescription>
              <CardAction>
                <Link href={`questionChat?qID=${id}`}>
                  <Button variant='default' className='hover:cursor-pointer'>View</Button>
                </Link>
              </CardAction>
            </CardHeader>
          </Card>
        </div>
      ))}
      <br></br>
      <Link href={`generalChat/`} className='p-4 outline-2 rounded-lg'>
        <h1 className='text-2xl'>General Chat ➡️</h1>
      </Link>
    </div>
  );
}
