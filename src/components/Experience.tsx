import React from 'react'
import { extend } from '@react-three/fiber'
import {OrbitControls, Plane, SoftShadows} from "@react-three/drei";
import Avatar from "./Avatar.tsx";

const Experience = () => {
  return (
    <>
      <OrbitControls/>
        <ambientLight />
        <directionalLight
            position={[-5, 5, 5]}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
        />
        <group  position={[0, -1, 0]}>
            <Avatar/>
        </group>
        <mesh rotation={[-0.5 * Math.PI, 0, 0]} position={[0, -1.01, 0]} receiveShadow>
            <planeGeometry args={[10, 10, 1, 1]} />
            <shadowMaterial transparent opacity={0.5} />
        </mesh>
    </>
  )
}

export default Experience
