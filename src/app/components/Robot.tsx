import * as THREE from 'three'
import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import gsap from 'gsap'

type GLTFResult = GLTF & {
    nodes: {
        Object_4: THREE.Mesh
        Object_5: THREE.Mesh
        Object_6: THREE.Mesh
        Object_8: THREE.Mesh
        Object_9: THREE.Mesh
        mesh_2: THREE.Mesh
        mesh_3: THREE.Mesh
    }
    materials: {
        BODY: THREE.MeshPhysicalMaterial
        GLOW: THREE.MeshPhysicalMaterial
        SCREEN: THREE.MeshStandardMaterial
        ['Material.001']: THREE.MeshStandardMaterial
        EYES: THREE.MeshPhysicalMaterial
    }
}

type ActionName = 'Animation'
type GLTFActions = Record<ActionName, THREE.AnimationAction>

export function Robot(props: JSX.IntrinsicElements['group']) {
    const group = useRef<THREE.Group>(null)
    const { nodes, materials, animations } = useGLTF('/models/cute_robot.glb') as GLTFResult
    useAnimations(animations, group)

    useEffect(() => {
        if (group.current) {
            gsap.to(group.current.rotation, {
                y: Math.PI * 2,
                duration: 5,
                repeat: -1,
                ease: 'linear'
            })

            gsap.to(group.current.position, {
                y: '+=0.2',
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            })
        }
    }, [])

    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
                    <group name="root">
                        <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
                            <group
                                name="Cylinder_0"
                                position={[0.005, 1.227, 0.854]}
                                rotation={[Math.PI / 2, 0, 0]}
                                scale={[0.153, 0.285, 0.153]}>
                                <mesh
                                    name="Object_4"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_4.geometry}
                                    material={materials.BODY}
                                />
                                <mesh
                                    name="Object_5"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_5.geometry}
                                    material={materials.GLOW}
                                />
                                <mesh
                                    name="Object_6"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_6.geometry}
                                    material={materials.SCREEN}
                                />
                            </group>
                            <group
                                name="Cube002_1"
                                position={[0, 0, -0.279]}
                                rotation={[0, 0.473, 0]}
                                scale={[0.892, 0.611, 0.611]}>
                                <mesh
                                    name="Object_8"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_8.geometry}
                                    material={materials.BODY}
                                />
                                <mesh
                                    name="Object_9"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_9.geometry}
                                    material={materials['Material.001']}
                                />
                            </group>
                            <group
                                name="Plane_2"
                                position={[0.473, 1.235, 0.136]}
                                rotation={[0, 0, -Math.PI / 2]}
                                scale={[0.168, 0.21, 0.09]}>
                                <mesh
                                    name="mesh_2"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.mesh_2.geometry}
                                    material={materials.EYES}
                                    morphTargetDictionary={nodes.mesh_2.morphTargetDictionary}
                                    morphTargetInfluences={nodes.mesh_2.morphTargetInfluences}
                                />
                            </group>
                            <group
                                name="Plane001_3"
                                position={[0.473, 1.235, -0.138]}
                                rotation={[0, 0, -Math.PI / 2]}
                                scale={[0.168, 0.21, 0.09]}>
                                <mesh
                                    name="mesh_3"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.mesh_3.geometry}
                                    material={materials.EYES}
                                    morphTargetDictionary={nodes.mesh_3.morphTargetDictionary}
                                    morphTargetInfluences={nodes.mesh_3.morphTargetInfluences}
                                />
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/models/cute_robot.glb')