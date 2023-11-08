import { Sky } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

const SceneSky: React.FC = () => {
  const [sunPosition, setSunPosition] = useState<
    [x: number, y: number, z: number]
  >([0, 0, 0]);
  const [lightIntensity, setLightIntensity] = useState(1)

  useFrame(({ clock }) => {
    setSunPosition([
      Math.sin(clock.getElapsedTime() / 25) * 100,
      Math.cos(clock.getElapsedTime() / 25) * 100,
      0,
    ]);
    setLightIntensity(((Math.cos(clock.getElapsedTime() / 25) + 1.1) * 3))
  });

  return (
    <>
      <Sky sunPosition={sunPosition}></Sky>
      <ambientLight intensity={lightIntensity} />
    </>
  );
};

export default SceneSky;
