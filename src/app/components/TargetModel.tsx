import { useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'
import { Mesh } from 'three'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
export default function TargetModel(props : any) {
    const targetRef = useRef<Mesh>()
    useGSAP(()=>{
        if (targetRef.current) {
            gsap.to(targetRef.current.position , {
                y: targetRef.current.position.y + 0.5,
                duration: 1.5 ,
                repeat:-1,
                yoyo:true
            })
        }
    });
    const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf')
  return (
    <mesh {...props} ref={targetRef} rotation={[0 , Math.PI/7 , 0]}>
      <primitive object={scene} />
    </mesh>
  )
}
