import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import { motion } from "framer-motion-3d";
import Avatar from "./Avatar";
import Dog from "./Dog";
import { framerMotionConfig } from "../config";

const Experience = ({
  section,
  menuOpened,
}: {
  menuOpened: boolean;
  section: number;
}) => {
  const { viewport } = useThree();
  const cameraPositionX = useMotionValue();
  const cameraLookAtX = useMotionValue();

  useEffect(() => {
    animate(cameraPositionX, menuOpened ? -2 : 0,{
      ...framerMotionConfig
    });
    animate(cameraLookAtX, menuOpened ? 2 : 0,{
      ...framerMotionConfig
    });
  }, [menuOpened]);

  useFrame((state) => {
    
    state.camera.position.x = cameraPositionX.get();
    state.camera.lookAt(cameraLookAtX.get(), 0, 0);
  });

  const [characterAnimation, setCharacterAnimation] = useState("Look Around");
  useEffect(() => {
    setCharacterAnimation("Falling");
    setTimeout(() => {
      setCharacterAnimation(section === 0 ? "Greeting" : "Look Around");
    }, 2400);
  }, [section]);
  return (
    <>
      <OrbitControls
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        enableZoom={false}
      />
      <Environment preset="sunset" />
      <directionalLight
        intensity={1}
        position={[-5, 5, 5]}
        castShadow
        shadow-mapSize={2048}
        shadow-bias={-0.0001}
      />
      <group position={[1, -1, -0.5]}
      >
        <group rotation={[0,-0.3,0]}>
          <Avatar animation={characterAnimation} />
        </group>
        <mesh position={[-1, 0, 0]} scale={[0.01, 0.01, 0.01]}>
          <Dog />
        </mesh>
        <ContactShadows
          position={[-1, 0, 0.5]}
          opacity={0.4}
          blur={1}
          far={10}
          resolution={256}
          color="#000"
        />
      </group>
    </>
  );
};

export default Experience;
