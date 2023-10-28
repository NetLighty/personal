"use client"
import { useEffect } from "react";
import Chat from "./chat/page";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./store/store";
import { initUser } from "./store/features/auth.slice";

const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(initUser())
  }, []);

  return (
    <main className="">
      <Chat />
    </main>
  );
};

export default Home;
