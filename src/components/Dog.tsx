import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations, useFBX } from "@react-three/drei";

const Dog = ({ animation }: { animation: string }) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("models/dog_model.glb");

  animations[0].name = "Greeting";
  animations[1].name = "Rollover";
  animations[2].name = "Shake";
  animations[3].name = "Sitting";
  animations[4].name = "Standing";
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions[animation]?.reset().fadeIn(0.5).play();
    return () => {
      actions[animation]?.fadeOut(0.5);
    };
  }, [animation]);

  return (
    <group ref={group} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="d2a6bc8fe88e4cbca4db3d181738fe46fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Light"
                  position={[407.625, 590.386, -100.545]}
                  rotation={[1.89, 0.881, -2.045]}
                  scale={100}
                >
                  <group name="Object_5" rotation={[Math.PI / 2, 0, 0]}>
                    <group name="Object_6" />
                  </group>
                </group>
                <group
                  name="Camera"
                  position={[735.889, 495.831, 692.579]}
                  rotation={[Math.PI, 0.756, 2.68]}
                  scale={100}
                >
                  <group name="Object_8" />
                </group>
                <group name="RootNode0">
                  <group name="geo1" />
                  <group name="skeletal3">
                    <group name="0">
                      <group name="Object_13">
                        <primitive object={nodes._rootJoint} />
                        <skinnedMesh
                          receiveShadow
                          name="Object_206"
                          geometry={nodes.Object_206.geometry}
                          material={materials.Material_0}
                          skeleton={nodes.Object_206.skeleton}
                        />
                        <group name="Object_205" />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="shiba_inu2" />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

export default Dog;
