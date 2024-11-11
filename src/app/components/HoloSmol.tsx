import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { gsap } from 'gsap'

type GLTFResult = GLTF & {
    nodes: {
        Object_76: THREE.SkinnedMesh
        Object_77: THREE.SkinnedMesh
        Object_152: THREE.SkinnedMesh
        Object_153: THREE.SkinnedMesh
        Object_154: THREE.SkinnedMesh
        Object_236: THREE.SkinnedMesh
        Object_237: THREE.SkinnedMesh
        Object_317: THREE.SkinnedMesh
        Object_318: THREE.SkinnedMesh
        Object_394: THREE.SkinnedMesh
        Object_395: THREE.SkinnedMesh
        Kiara_parasol_HW_smolkiara_0: THREE.Mesh
        _rootJoint: THREE.Bone
        _rootJoint_1: THREE.Bone
        _rootJoint_2: THREE.Bone
        _rootJoint_3: THREE.Bone
        _rootJoint_4: THREE.Bone
    }
    materials: {
        outline: THREE.MeshStandardMaterial
        Hw_smolametex: THREE.MeshStandardMaterial
        HWSmolCalli: THREE.MeshStandardMaterial
        SmolCalliVeil: THREE.MeshStandardMaterial
        SmolGura: THREE.MeshStandardMaterial
        HW_SmolIna: THREE.MeshStandardMaterial
        HW_smolkiara: THREE.MeshStandardMaterial
    }
}

export function HoloSmol(props: JSX.IntrinsicElements['group']) {
    const { nodes, materials } = useGLTF('/models/smol_holomyth_halloween_costumes.glb') as GLTFResult
    const groupRef = useRef<THREE.Group>(null)

    const handleClick = () => {
        if (groupRef.current) {
            gsap.to(groupRef.current.rotation, {
                y: groupRef.current.rotation.y + Math.PI * 2,
                duration: 2,
                ease: 'power2.inOut'
            })
        }
    }

    return (
        <group {...props} dispose={null} ref={groupRef} onClick={handleClick}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={0.393}>
                <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                    <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                        <primitive object={nodes._rootJoint} />
                        <skinnedMesh
                            geometry={nodes.Object_76.geometry}
                            material={materials.outline}
                            skeleton={nodes.Object_76.skeleton}
                        />
                        <skinnedMesh
                            geometry={nodes.Object_77.geometry}
                            material={materials.Hw_smolametex}
                            skeleton={nodes.Object_77.skeleton}
                        />
                    </group>
                    <group position={[-490.602, 0, 0]} rotation={[-Math.PI / 2, 0, 0.463]} scale={100}>
                        <primitive object={nodes._rootJoint_1} />
                        <skinnedMesh
                            geometry={nodes.Object_152.geometry}
                            material={materials.HWSmolCalli}
                            skeleton={nodes.Object_152.skeleton}
                        />
                        <skinnedMesh
                            geometry={nodes.Object_153.geometry}
                            material={materials.outline}
                            skeleton={nodes.Object_153.skeleton}
                        />
                        <skinnedMesh
                            geometry={nodes.Object_154.geometry}
                            material={materials.SmolCalliVeil}
                            skeleton={nodes.Object_154.skeleton}
                        />
                    </group>
                    <group position={[440.422, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                        <primitive object={nodes._rootJoint_2} />
                        <skinnedMesh
                            geometry={nodes.Object_236.geometry}
                            material={materials.SmolGura}
                            skeleton={nodes.Object_236.skeleton}
                        />
                        <skinnedMesh
                            geometry={nodes.Object_237.geometry}
                            material={materials.outline}
                            skeleton={nodes.Object_237.skeleton}
                        />
                    </group>
                    <group position={[227.99, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                        <primitive object={nodes._rootJoint_3} />
                        <skinnedMesh
                            geometry={nodes.Object_317.geometry}
                            material={materials.HW_SmolIna}
                            skeleton={nodes.Object_317.skeleton}
                        />
                        <skinnedMesh
                            geometry={nodes.Object_318.geometry}
                            material={materials.outline}
                            skeleton={nodes.Object_318.skeleton}
                        />
                    </group>
                    <group position={[-245.133, 0, 0]} rotation={[-Math.PI / 2, 0, 0.177]} scale={100}>
                        <primitive object={nodes._rootJoint_4} />
                        <skinnedMesh
                            geometry={nodes.Object_394.geometry}
                            material={materials.HW_smolkiara}
                            skeleton={nodes.Object_394.skeleton}
                        />
                        <skinnedMesh
                            geometry={nodes.Object_395.geometry}
                            material={materials.outline}
                            skeleton={nodes.Object_395.skeleton}
                        />
                    </group>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Kiara_parasol_HW_smolkiara_0.geometry}
                        material={materials.HW_smolkiara}
                        position={[-217.027, 87.621, 52.924]}
                        rotation={[-2.318, -0.571, -0.62]}
                        scale={[110.45, 110.464, 118.507]}
                    />
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/models/smol_holomyth_halloween_costumes.glb')
