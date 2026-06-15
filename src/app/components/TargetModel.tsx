import { useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function TargetModel(props: any) {
    const groupRef = useRef<THREE.Group>(null)
    useGSAP(() => {
        if (groupRef.current) {
            gsap.to(groupRef.current.position, {
                y: groupRef.current.position.y + 0.5,
                duration: 1.5,
                repeat: -1,
                yoyo: true
            })
        }
    })
    const { scene } = useGLTF('/models/miku.glb')
    return (
        <group {...props} ref={groupRef} rotation={[0, Math.PI + Math.PI / 7, 0]}>
            <primitive object={scene} />
        </group>
    )
}
