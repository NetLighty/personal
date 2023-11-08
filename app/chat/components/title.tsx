import html2canvas from "html2canvas";
import { useRef } from "react";

const ChatTitle: React.FC = () => {
  const chatRef = useRef<HTMLDivElement>(null);

  const downloadCanvas = () => {
    html2canvas(chatRef.current!).then(function (canvas) {
      var link = document.createElement("a");
      link.download = "filename.png";
      link.href = canvas.toDataURL();
      link.click();
    });
  };
  return (
    <div ref={chatRef} className="title  py-2 px-3 overflow-auto flex-none">
      <span
        onClick={downloadCanvas}
        className="text-white text-lg font-semibold"
      >
        Chat
      </span>
    </div>
  );
};

export default ChatTitle;
