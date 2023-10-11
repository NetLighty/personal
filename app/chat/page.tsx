const Chat: React.FC = () => {
  return (
    <div className="flex relative flex-col bg-[#2E3036] w-[405px] m-auto h-[650px] mt-5">
      <section className="title flex-none">Chat</section>
      <div className="scroller flex-1">

      </div>
      <form className="px-[16px] flex-none">
        <div className="relative bottom-0 w-[100%] m-auto bg-[#383A40] h-[44px] rounded-[8px]">
          {/* <span className="absolute right-0 text-[#F2F3F5]">send</span> */}
        </div>
      </form>
    </div>
  );
};

export default Chat;
