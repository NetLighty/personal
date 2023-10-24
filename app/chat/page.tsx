"use client";

import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "../store/store";
import { addMessage } from "../store/features/chat.slice";
import { useEffect, useRef, useState } from "react";
import ChatScroller from "./components/scroller";
import ChatInput from "./components/input";

import html2canvas from "html2canvas";
import { wsConnect } from "../store/features/webSocket.slice";

const Chat: React.FC = () => {
  const messages = useAppSelector((state) => state.chatReducer.value.messages);
  //const [inputValue, setInputValue] = useState("");
  const chatRef = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch<AppDispatch>()

  useEffect(()=> {
    dispatch(wsConnect())
  }, [])

  const downloadCanvas = () => {
    html2canvas(chatRef.current!).then(function (canvas) {
      //document.body.appendChild(canvas);
      //var img = canvas.toDataURL("image/png");
      //document.write('<img src="' + img + '"/>');
      var link = document.createElement("a");
      link.download = "filename.png";
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  return (
    <div
      ref={chatRef}
      className="flex relative flex-col bg-[#2E3036] w-[405px] m-auto h-[650px] mt-5"
    >
      <section className="title  py-2 px-3 overflow-auto flex-none">
        <span
          onClick={() => {
            downloadCanvas();
            console.log("dsfsdf");
            return false;
          }}
          className="text-white text-lg font-semibold"
        >
          Chat
        </span>
      </section>
      <ChatScroller />
      <ChatInput />
    </div>
  );
};

export default Chat;
