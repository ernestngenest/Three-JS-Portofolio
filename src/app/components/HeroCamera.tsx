import { useFrame } from '@react-three/fiber'
import React, { Children, useRef } from 'react'
import {easing} from 'maath'

export default function HeroCamera({children , isMobile} : any) {
    const groupRef : any = useRef()
    useFrame((state , delta)=>{
        easing.damp3(state.camera.position, [0,0,21], 0.25, delta)
        if(!isMobile){
            easing.dampE(groupRef.current.rotation, [-state.pointer.y/3,-state.pointer.x/5 , 0], 0.25, delta)
        }
    })
   
  return (
    <group ref={groupRef}>
      {children}
    </group>
  )
}
