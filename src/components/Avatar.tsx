import React, {useEffect, useRef} from "react";
import {useAnimations, useFBX, useGLTF} from "@react-three/drei";

const Avatar = (props) => {
    const {nodes, materials} = useGLTF("models/my_model.glb");
    const group = useRef()
    const {animations: greetingAnimation} = useFBX('animations/Greeting.fbx')

    greetingAnimation[0].name = 'Greeting'
    const {actions} = useAnimations(greetingAnimation, group)

    useEffect(()=>{
        actions['Greeting'].reset().play()
    },[])

    return (
        <group {...props} ref={group} dispose={null} >
            <group rotation-x={ -Math.PI/2} >
                <primitive object={nodes.Hips}/>
                <skinnedMesh
                    castShadow
                    name="EyeLeft"
                    geometry={nodes.EyeLeft.geometry}
                    material={materials.Wolf3D_Eye}
                    skeleton={nodes.EyeLeft.skeleton}
                    morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
                    morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
                />
                <skinnedMesh
                    castShadow
                    name="EyeRight"
                    geometry={nodes.EyeRight.geometry}
                    material={materials.Wolf3D_Eye}
                    skeleton={nodes.EyeRight.skeleton}
                    morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
                    morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
                />
                <skinnedMesh
                    castShadow
                    name="Wolf3D_Head"
                    geometry={nodes.Wolf3D_Head.geometry}
                    material={materials.Wolf3D_Skin}
                    skeleton={nodes.Wolf3D_Head.skeleton}
                    morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
                    morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
                />
                <skinnedMesh
                    castShadow
                    name="Wolf3D_Teeth"
                    geometry={nodes.Wolf3D_Teeth.geometry}
                    material={materials.Wolf3D_Teeth}
                    skeleton={nodes.Wolf3D_Teeth.skeleton}
                    morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
                    morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
                />
                <skinnedMesh
                    castShadow
                    geometry={nodes.Wolf3D_Hair.geometry}
                    material={materials.Wolf3D_Hair}
                    skeleton={nodes.Wolf3D_Hair.skeleton}
                />
                <skinnedMesh
                    castShadow
                    name="Wolf3D_Outfit_Top"
                    geometry={nodes.Wolf3D_Outfit_Top.geometry}
                    material={materials.Wolf3D_Outfit_Top}
                    skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
                    morphTargetDictionary={nodes.Wolf3D_Outfit_Top.morphTargetDictionary}
                    morphTargetInfluences={nodes.Wolf3D_Outfit_Top.morphTargetInfluences}
                />
                <skinnedMesh
                    castShadow
                    name="Wolf3D_Outfit_Bottom"
                    geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
                    material={materials.Wolf3D_Outfit_Bottom}
                    skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
                    morphTargetDictionary={nodes.Wolf3D_Outfit_Bottom.morphTargetDictionary}
                    morphTargetInfluences={nodes.Wolf3D_Outfit_Bottom.morphTargetInfluences}
                />
                <skinnedMesh
                    castShadow
                    name="Wolf3D_Outfit_Footwear"
                    geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
                    material={materials.Wolf3D_Outfit_Footwear}
                    skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
                    morphTargetDictionary={
                        nodes.Wolf3D_Outfit_Footwear.morphTargetDictionary
                    }
                    morphTargetInfluences={
                        nodes.Wolf3D_Outfit_Footwear.morphTargetInfluences
                    }
                />
                <skinnedMesh
                    castShadow
                    name="Wolf3D_Body"
                    geometry={nodes.Wolf3D_Body.geometry}
                    material={materials.Wolf3D_Body}
                    skeleton={nodes.Wolf3D_Body.skeleton}
                    morphTargetDictionary={nodes.Wolf3D_Body.morphTargetDictionary}
                    morphTargetInfluences={nodes.Wolf3D_Body.morphTargetInfluences}
                />
            </group>
        </group>
    );
}

export default Avatar;
