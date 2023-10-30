"use client";
import { useEffect, useRef } from "react";
import { useAppSelector } from "@/app/store/store";
import { formatDateMsgMini, formatMsgDateTitle } from "@/app/common/formatDate";

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
        let isSameUser = false;
        if (index !== 0 && msg.username === messages[index - 1].username) {
          isSameUser = true;
        }
        return (
          <div key={msg.id} className="px-[48px] text-white">
            <h3 className={`${isSameUser ? "hidden" : "mt-[8px]"}`}>
              <span className="mr-2 font-semibold leading-3 tracking-wide">
                {msg.username.substring(0, 10)}
              </span>
              <span className="opacity-70 font-light text-xs tracking-wide">
                {formatMsgDateTitle(msg.date!)}
              </span>
            </h3>
            <div className="">
              <p className="whitespace-pre-line break-words hyphens-auto opacity-90">
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
