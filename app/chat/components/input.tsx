"use client"
import { addMessage } from "@/app/redux/features/chat-slice";
import { AppDispatch } from "@/app/redux/store";
import { useDispatch } from "react-redux";

const ChatInput: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();

  const sendMessage = (msg: string) => {
    dispatch(addMessage(msg));
  };

  return (
    <form className="px-[16px] shrink-0">
      <div
        //onClick={sendMessage}
        className="textArea relative w-[100%] m-auto mb-[24px] bg-[#383A40] rounded-[8px]"
      >
        <div className="scrollableContainer overflow-x-hidden overflow-y-auto max-h-[40vh]">
          <div
            onInput={(e) => {
              const target = e.target as HTMLDivElement;
              //setInputValue(target.innerHTML);
            }}
            onKeyDown={(e) => {
              const target = e.target as HTMLDivElement;
              const msgText = target.innerText.trim();
              if (e.key === "Enter" && e.shiftKey === false) {
                e.preventDefault();
                if (msgText.length !== 0) {
                  sendMessage(msgText);
                  target.innerHTML = "";
                }
              }
            }}
            role="textbox"
            placeholder="Send message"
            aria-multiline={true}
            contentEditable={true}
            style={{
              position: "relative",
              outline: "none",
              whiteSpace: "pre-wrap",
              overflowWrap: "break-word",
            }}
            className="py-[11px] px-[10px] empty:before:content-[attr(placeholder)] before:opacity-50"
          ></div>
        </div>
      </div>
    </form>
  );
};

export default ChatInput;