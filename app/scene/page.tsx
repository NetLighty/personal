import { Canvas } from "@react-three/fiber";
import SceneSky from "./components/sky";
import Ground from "./components/ground";
import { PointerLockControls } from "@react-three/drei";
import { Physics, RigidBody } from "@react-three/rapier";
import Player from "./components/player";

const FightScene: React.FC = () => {
  return (
    <main className="w-[100%] h-[100vh]">
      <Canvas camera={{ fov: 45 }}>
        <PointerLockControls />
        <SceneSky />
        <Physics gravity={[0, -20, 0]}>
          <Player />
          <Ground />
          <RigidBody>
            <mesh position={[0, 3, -5]}>
              <boxGeometry />
            </mesh>
          </RigidBody>
        </Physics>
      </Canvas>
    </main>
  );
};

export default FightScene;
