"use client";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { useEffect } from "react";
import ChatScroller from "./components/scroller";
import ChatInput from "./components/input";
import { wsConnect } from "../store/features/webSocket.slice";
import ChatTitle from "./components/title";

const Chat: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(wsConnect());
  }, []);

  return (
    <section className="flex relative flex-col bg-[#2E3036] w-[405px] m-auto h-[650px] mt-5">
      <ChatTitle />
      <ChatScroller />
      <ChatInput />
    </section>
  );
};

export default Chat;
