"use client";
import { useEffect, useRef } from "react";
import { useAppSelector } from "@/app/store/store";

const ChatScroller: React.FC = () => {
  const messages = useAppSelector((state) => state.chatReducer.value.messages);
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollerRef.current!.scrollTop = scrollerRef.current!.scrollHeight;
  }, [messages]);

  return (
    <div
      ref={scrollerRef}
      className="scroller pb-[20px] px-[16px] overflow-y-scroll overflow-x-hidden flex-1 "
    >
      {messages.map((msg, index) => {
        return (
          <div key={index} className="px-[48px] mt-[8px] text-white">
            <h3>
              <span className="mr-2 font-semibold tracking-wide">username</span>
              <span className="opacity-70 font-light text-sm">time</span>
            </h3>
            <div className="">
              <p className="whitespace-pre-line break-words hyphens-auto opacity-80">
                {msg.text}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChatScroller;
