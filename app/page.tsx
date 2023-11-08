"use client";
import { useEffect } from "react";
import Chat from "./chat/page";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./store/store";
import { initUser } from "./store/features/auth.slice";
import FightScene from "./scene/page";

const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(initUser());
  }, []);

  return (
    <section className="flex flex-row">
      <FightScene />
      <div className="absolute right-0">
        <Chat />
      </div>
    </section>
  );
};

export default Home;
