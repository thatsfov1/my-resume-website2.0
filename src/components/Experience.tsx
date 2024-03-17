import { ContactShadows, Environment } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { MotionValue, animate, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import { motion } from "framer-motion-3d";
import Avatar from "./Avatar";
import Dog from "./Dog";
import { framerMotionConfig } from "../config";

type Props = {
  menuOpened: boolean;
  section: number;
  dogAnimation: string;
  setDogAnimation: React.Dispatch<React.SetStateAction<string>>;
};

const Experience = ({
  section,
  menuOpened,
  dogAnimation,
  setDogAnimation,
}: Props) => {
  const { viewport } = useThree();
  const cameraPositionX = useMotionValue(0);
  const cameraLookAtX= useMotionValue(0);

  const isMobile = window.innerWidth < 768;
  const responsiveRatio = viewport.width / 2;
  const charactersResponsiveRatio = Math.max(
    0.7,
    Math.min(1 * responsiveRatio, 1)
  );

  useEffect(() => {
    animate(cameraPositionX, menuOpened ? -2 : 0, {
      ...framerMotionConfig,
    } as any);
    animate(cameraLookAtX, menuOpened ? 2 : 0, {
      ...framerMotionConfig,
    } as any);
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
    setTimeout(() => {
      setDogAnimation(section === 0 ? "Greeting" : "Sitting");
    }, 500);
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
        position={[
          isMobile ? 0.4 : 1 * charactersResponsiveRatio,
          isMobile ? -viewport.height : -1,
          -0.5,
        ]}
        animate={{
          z: section === 2 ? 0 : -0.5,
          y: section === 2 ? viewport.height : isMobile ? -1.4 : -1,
        }}
        transition={{
          duration: 0.6,
        }}
        scale={[
          charactersResponsiveRatio,
          charactersResponsiveRatio,
          charactersResponsiveRatio,
        ]}
        rotation={[
          isMobile && section !== 0 ? -0.1 : 0,
          isMobile && section !== 0 ? -0.3 : 0,
          0,
        ]}
      >
        <group rotation={[0, isMobile ? -0.1 : -0.3, 0]}>
          <Avatar animation={characterAnimation} />
        </group>
        <group position={[-1, 0, 0]} scale={[0.01, 0.01, 0.01]}>
          <Dog animation={dogAnimation} />
        </group>
        <ContactShadows
          position={[
            isMobile ? -1.6 : -1,
            isMobile ? -viewport.height : 0,
            0.5,
          ]}
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
