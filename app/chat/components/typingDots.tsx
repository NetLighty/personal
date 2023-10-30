import { useEffect, useRef } from "react";
import { useAppSelector } from "@/app/store/store";
import { formatDateMsgMini, formatDateMsgTitle } from "@/app/common/formatDate";

const TypingDots: React.FC = () => {
  return (
    <div className="relative flex flex-row py-2 pr-2 bg-transparent">
      <div className="w-2 h-2 mr-1 opacity-30 bg-[#FFFFFF] rounded-full  animate-[loadingFade_1.4s_infinite]"></div>
      <div className="w-2 h-2 mr-1 opacity-30 bg-[#FFFFFF] rounded-full animate-[loadingFade_1.4s_infinite_0.25s]"></div>
      <div className="w-2 h-2 opacity-30 bg-[#FFFFFF] rounded-full animate-[loadingFade_1.4s_infinite_0.5s]"></div>
    </div>
  );
};

export default TypingDots;
