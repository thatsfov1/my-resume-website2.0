import { useEffect, useMemo, useRef, RefObject } from "react";
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { SkinnedMesh ,Group} from "three";

const Avatar = ({ animation }: { animation: string }) => {
  const { nodes, materials } = useGLTF("models/my_model.glb");
  const group: RefObject<Group | undefined> = useRef<Group>(null); 
  const { animations: greetingAnimation } = useFBX("animations/Greeting.fbx");
  const { animations: lookAroundAnimation } = useFBX(
    "animations/Look Around.fbx"
  );
  const { animations: fallingAnimation } = useFBX(
    "animations/Soccer Tackle.fbx"
  );

  greetingAnimation[0].name = "Greeting";
  lookAroundAnimation[0].name = "Look Around";
  fallingAnimation[0].name = "Falling";

  const anims = useMemo(
    () => [greetingAnimation[0], lookAroundAnimation[0], fallingAnimation[0]],
    []
  );

  const { actions } = useAnimations(anims, group);

  useEffect(() => {
    actions[animation]?.reset().fadeIn(0.5).play();
    return () => {
      actions[animation]?.fadeOut(0.5);
    };
  }, [animation]);

  const eyeLeft = nodes.EyeLeft as SkinnedMesh;
  const eyeRight = nodes.EyeRight as SkinnedMesh;
  const head = nodes.Wolf3D_Head as SkinnedMesh;
  const hair = nodes.Wolf3D_Hair as SkinnedMesh;
  const outfit_top = nodes.Wolf3D_Outfit_Top as SkinnedMesh;
  const outfit_bottom = nodes.Wolf3D_Outfit_Bottom as SkinnedMesh;
  const outfit_footwear = nodes.Wolf3D_Outfit_Footwear as SkinnedMesh;
  const body = nodes.Wolf3D_Body as SkinnedMesh;

  return (
    <group ref={group as RefObject<Group>} dispose={null}>
      <primitive object={nodes.Hips} />
      <skinnedMesh
        castShadow
        name="EyeLeft"
        geometry={eyeLeft.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={eyeLeft.skeleton}
        morphTargetDictionary={eyeLeft.morphTargetDictionary}
        morphTargetInfluences={eyeLeft.morphTargetInfluences}
      />
      <skinnedMesh
        castShadow
        name="EyeRight"
        geometry={eyeRight.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={eyeRight.skeleton}
        morphTargetDictionary={eyeRight.morphTargetDictionary}
        morphTargetInfluences={eyeRight.morphTargetInfluences}
      />
      <skinnedMesh
        castShadow
        name="Wolf3D_Head"
        geometry={head.geometry}
        material={materials.Wolf3D_Skin}
        skeleton={head.skeleton}
        morphTargetDictionary={head.morphTargetDictionary}
        morphTargetInfluences={head.morphTargetInfluences}
      />

      <skinnedMesh
        castShadow
        geometry={hair.geometry}
        material={materials.Wolf3D_Hair}
        skeleton={hair.skeleton}
      />
      <skinnedMesh
        castShadow
        name="Wolf3D_Outfit_Top"
        geometry={outfit_top.geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={outfit_top.skeleton}
        morphTargetDictionary={outfit_top.morphTargetDictionary}
        morphTargetInfluences={outfit_top.morphTargetInfluences}
      />
      <skinnedMesh
        castShadow
        name="Wolf3D_Outfit_Bottom"
        geometry={outfit_bottom.geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={outfit_bottom.skeleton}
        morphTargetDictionary={outfit_bottom.morphTargetDictionary}
        morphTargetInfluences={outfit_bottom.morphTargetInfluences}
      />
      <skinnedMesh
        castShadow
        name="Wolf3D_Outfit_Footwear"
        geometry={outfit_footwear.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={outfit_footwear.skeleton}
        morphTargetDictionary={outfit_footwear.morphTargetDictionary}
        morphTargetInfluences={outfit_footwear.morphTargetInfluences}
      />
      <skinnedMesh
        castShadow
        name="Wolf3D_Body"
        geometry={body.geometry}
        material={materials.Wolf3D_Body}
        skeleton={body.skeleton}
        morphTargetDictionary={body.morphTargetDictionary}
        morphTargetInfluences={body.morphTargetInfluences}
      />
    </group>
  );
};

useGLTF.preload("models/my_model.glb");

export default Avatar;
