import { UserState } from "@/app/store/features/auth.slice";

type TypingMsgProps = {
  typingUsers: UserState[];
};

const TypingMsg: React.FC<TypingMsgProps> = ({ typingUsers }) => {
  const createTypingMsg = (typingUsers: UserState[]) => {
    const username1 = typingUsers[0].username.substring(0, 10);
    const username2 = typingUsers[1].username.substring(0, 10);
    const username3 = typingUsers[2].username.substring(0, 10);
    
    if (typingUsers.length === 1) {
      return `${username1} is typing`;
    }
    if (typingUsers.length === 2) {
      return `${username1} and ${username2} are typing`;
    }
    if (typingUsers.length === 3) {
      return `${username1}, ${username2} and ${username3} are typing`;
    }
    if (typingUsers.length > 3) {
      return `several people typing`;
    }
  };
  return (
    <span className="truncate w-[340px]">{createTypingMsg(typingUsers)}</span>
  );
};

export default TypingMsg;
