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
  const cameraPositionX = useMotionValue(0);
  const cameraLookAtX = useMotionValue(0);

  useEffect(() => {
    animate(cameraPositionX, menuOpened ? -2 : 0, {
      ...framerMotionConfig,
    });
    animate(cameraLookAtX, menuOpened ? 2 : 0, {
      ...framerMotionConfig,
    });
  }, [menuOpened]);

  useFrame((state) => {
    state.camera.position.x = cameraPositionX.get();
    state.camera.lookAt(cameraLookAtX.get(), 0, 0);
  });

  const [characterAnimation, setCharacterAnimation] = useState("Falling");

  useEffect(() => {
    setCharacterAnimation("Falling");
    setTimeout(() => {
      setCharacterAnimation(section === 0 ? "Greeting" : "Look Around");
    }, 1800);
  }, [section]);
  return (
    <>
      <Environment preset="sunset" />
      <directionalLight
        intensity={1}
        position={[-5, 5, 5]}
        castShadow
        shadow-mapSize={2048}
        shadow-bias={-0.0001}
      />
      <motion.group
        position={[1, -1, -0.5]}
        animate={{
          z: section === 2 ? 0 : -0.5,
          y: section === 2 ? viewport.height : -1,
        }}
      >
        <group rotation={[0, -0.3, 0]}>
          <Avatar animation={characterAnimation} />
        </group>
        <group position={[-1, 0, 0]} scale={[0.01, 0.01, 0.01]}>
          <Dog section={section} />
        </group>
        <ContactShadows
          position={[-1, 0, 0.5]}
          opacity={0.4}
          blur={1}
          far={10}
          resolution={256}
          color="#000"
        />
      </motion.group>
    </>
  );
};

export default Experience;
