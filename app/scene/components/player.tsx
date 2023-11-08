import { RapierRigidBody, RigidBody } from "@react-three/rapier";
import { useRef } from "react";
import * as THREE from "three";
import { usePlayerControls } from "../hooks/usePlayerControls";
import { useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Group, Object3DEventMap } from "three";

const Player: React.FC = () => {
  const playerRef = useRef<RapierRigidBody | null>(null);
  const targetRef = useRef<Group<Object3DEventMap>>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  const orbitRef = useRef<Group<Object3DEventMap>>(null);
  const { forward, backward, left, right, jump } = usePlayerControls();
  
  orbitRef.rotation.order = "YXZ"; //this is important to keep level, so Z should be the last axis to rotate in order...
  document.addEventListener("mousemove", function (e) {
    let scale = -0.01;
    orbitRef.rotateY(e.movementX * scale);
    orbitRef.rotateX(e.movementY * scale);
    orbitRef.rotation.z = 0; //this is important to keep the camera level..
  });
  //player
  const MOVE_SPEED = 5;
  const direction = new THREE.Vector3();
  const frontVector = new THREE.Vector3();
  const sideVector = new THREE.Vector3();

  //camera
  const currentPosition = new THREE.Vector3();
  const currentLookat = new THREE.Vector3();

  const calculateIdealOffset = () => {
    const idealOffset = new THREE.Vector3(-3, 1, 0);
    idealOffset.applyQuaternion(playerRef.current!);
  };

  useFrame((state) => {
    if (!playerRef.current) return;

    //console.log(playerRef.current);
    const velocity = playerRef.current.linvel();

    frontVector.set(0, 0, backward - forward);
    sideVector.set(left - right, 0, 0);
    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(MOVE_SPEED)
      .applyEuler(state.camera.rotation);

    playerRef.current.setLinvel(
      {
        x: direction.x,
        y: velocity.y,
        z: direction.z,
      },
      true
    );

    const { x, y, z } = playerRef.current.translation();
    const playerPosition = new THREE.Vector3(x, y, z);
    //state.camera.position.set(x - 3, y + 1, z);
    state.camera.lookAt(playerPosition);
    state.camera.updateProjectionMatrix();
  });

  return (
    <>
      <OrbitControls />
      <group ref={targetRef}>
        <group ref={orbitRef}>
          <PerspectiveCamera
            ref={cameraRef}
            makeDefault
            position={[25, 22, 25]}
            args={[45, 1.2, 1, 1000]}
          />
        </group>
        <RigidBody position={[0, 1, -2]} ref={playerRef}>
          <mesh>
            <capsuleGeometry args={[0.5, 0.5]} />
          </mesh>
        </RigidBody>
      </group>
    </>
  );
};

export default Player;
