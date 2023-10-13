"use client";

import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "../redux/store";
import { addMessage } from "../redux/features/chat-slice";
import { useRef, useState } from "react";
import ChatScroller from "./components/scroller";
import ChatInput from "./components/input";

const Chat: React.FC = () => {
  const messages = useAppSelector((state) => state.chatReducer.value.messages);
  //const [inputValue, setInputValue] = useState("");
  const scrollerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex relative flex-col bg-[#2E3036] w-[405px] m-auto h-[650px] mt-5">
      <section className="title  py-2 px-3 overflow-auto flex-none">
        <span className="text-white text-lg font-semibold">Chat</span>
      </section>
      <ChatScroller />
      <ChatInput />
    </div>
  );
};

export default Chat;
