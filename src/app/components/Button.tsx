import { span } from 'framer-motion/client'
import React from 'react'

export default function Button({name , isBeam = false , containerClass} : any) {
  return (
    <button className = {`btn $${containerClass}`}>
        {isBeam && (
            <span className = "relative flex h-3 w-3"> 
                <span className="btn-ping"></span>
                <span className="btn-ping_dot"></span>
            </span>
        )}
      {name}
    </button>
  )
}