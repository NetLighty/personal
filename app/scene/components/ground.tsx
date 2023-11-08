import * as THREE from "three";
import { useTexture } from "@react-three/drei";
import floorTexture from "../../../public/wallpaperflare.com_wallpaper.png";
import { RigidBody } from "@react-three/rapier";

const Ground: React.FC = () => {
  const texture = useTexture("/whiteandblack.jpg");
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  return (
    <RigidBody>
      <mesh position={[0, -5, 0]} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[500, 500]} />
        <meshStandardMaterial
          color="grey"
          map={texture}
          map-repeat={[360, 360]}
        />
      </mesh>
    </RigidBody>
  );
};

export default Ground;
