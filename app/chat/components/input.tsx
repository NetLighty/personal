"use client";
import React from "react";
import { setInputText } from "@/app/store/features/chat.slice";
import { addTyping, removeTyping, send } from "@/app/store/features/webSocket.slice";
import { AppDispatch, useAppSelector } from "@/app/store/store";
import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import ContentEditable from "react-contenteditable";
import sanitizeHtml from "sanitize-html";
import debounce from "lodash/debounce";
import TypingDots from "./typingDots";
import TypingMsg from "./typingMsg";

const ChatInput: React.FC = () => {
  const [inputContent, setInputContent] = useState("");
  const user = useAppSelector(
    (state) => state.authReducer.user
  );
  const typingUsers = useAppSelector(
    (state) => state.chatReducer.value.typingUsers.filter(typingUser => typingUser.id !== user.id)
  );
  const dispatch = useDispatch<AppDispatch>();

  const onInputChange = React.useCallback((evt: FormEvent) => {
    dispatch(addTyping())
    debounceTypingFalse();
    const sanitizeConf = {
      allowedTags: ["b", "i", "a", "p"],
      allowedAttributes: { a: ["href"] },
    };
    const content = sanitizeHtml(evt.currentTarget.innerHTML, sanitizeConf);
    dispatch(setInputText(content.trim()));
    setInputContent(content);
  }, []);

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    const msgText = target.innerText.trim();
    if (e.key === "Enter" && e.shiftKey === false) {
      e.preventDefault();
      if (msgText.length !== 0) {
        dispatch(send());
      }
      dispatch(setInputText(""));
      setInputContent("");
    }
  };

  const debounceTypingFalse = debounce(() => {
    dispatch(removeTyping())
  }, 100000000);

  return (
    <form className="px-[16px] shrink-0">
      <div
        //onClick={sendMessage}
        className="textArea relative w-[100%] m-auto mb-[28px] bg-[#383A40] rounded-[8px]"
      >
        <div className="scrollableContainer overflow-x-hidden overflow-y-auto max-h-[40vh]">
          <ContentEditable
            onChange={onInputChange}
            onKeyDown={onKeyDown}
            html={inputContent}
            placeholder="Send message"
            aria-multiline={true}
            contentEditable={true}
            style={{
              position: "relative",
              outline: "none",
              whiteSpace: "pre-wrap",
              overflowWrap: "break-word",
            }}
            className="py-[11px] px-[10px] empty:before:content-[attr(placeholder)] before:opacity-50 before:cursor-text"
          ></ContentEditable>
        </div>
        <div className={` ${typingUsers.length > 0 ? "" : "hidden"} absolute flex flex-row`}>
          <TypingDots />
          <TypingMsg typingUsers={typingUsers} />
        </div>
      </div>
    </form>
  );
};

export default ChatInput;
