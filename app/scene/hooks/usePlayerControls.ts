import { useEffect, useState } from "react";

type Keys = {
    KeyW: string,
    KeyS: string,
    KeyA: string,
    KeyD: string,
    Space: string,
}

export const usePlayerControls = () => {
  const keys: Keys = {
    KeyW: "forward",
    KeyS: "backward",
    KeyA: "left",
    KeyD: "right",
    Space: "jump",
  };

  const [movement, setMovement] = useState({
    forward: 0,
    backward: 0,
    left: 0,
    right: 0,
    jump: 0,
  });

  const setMovementStatus = (code: string, status: number) => {
    console.log(code, status);
    setMovement((m) => ({ ...m, [code]: status }));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setMovementStatus(keys[e.code], 1);
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      setMovementStatus(keys[e.code], 0);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return movement;
};
