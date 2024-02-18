import React from 'react'
import {
    ContactShadows,
    Environment,
    OrbitControls,
    SoftShadows
} from "@react-three/drei";
import Avatar from "./Avatar.tsx";
import Dog from "./Dog";

const Experience = (props) => {
  return (
    <>
      <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={false}/>
        <Environment preset='sunset'/>
        <directionalLight intensity={1} position={[-5, 5, 5]} castShadow shadow-mapSize={2048} shadow-bias={-0.0001} />
        <group position={[1, -1, -0.5]}>
                <Avatar/>
            <mesh position={[-1,0,0]} scale={[0.01,0.01,0.01]}>
                <Dog />
            </mesh>
            <ContactShadows position={[-1,0,0.5]} opacity={0.4}  blur={1} far={10} resolution={256} color="#000"/>

        </group>


    </>
  )
}

export default Experience
