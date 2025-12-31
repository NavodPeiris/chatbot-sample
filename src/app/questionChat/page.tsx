"use client"

import ChatQuestion from "@/app/components/ChatQuestion";
import { useSearchParams } from 'next/navigation';
import { QUESTIONS, QId } from "@/app/database/questions";

function QuestionPage(){
    const searchParams = useSearchParams();
    const qID = searchParams.get('qID');

    return(
        <div className="flex flex-row m-4 justify-center items-start">
            <div className="flex flex-col gap-2 text-lg outline-1 rounded-lg p-4 w-[400px]">
                <div className="text-xl font-bold">
                    Question:
                </div>
                {QUESTIONS[qID as QId]}
            </div>
            <ChatQuestion questionId={qID as string}/>
        </div>
    )
}

export default QuestionPage;