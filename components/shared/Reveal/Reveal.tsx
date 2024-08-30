"use client"
import React, { Children, useRef } from 'react'
import {motion, useAnimate, useAnimation, useInView} from "framer-motion";
import { RevealProps } from './Reveal.Type'
import { useEffect, useState } from 'react';

export const fadeIn=(position:string, delay?: number )=>{
    return{
        visible:{
            x:0,
            y:0,
            opacity:1,
            transition:{
                type:"tween",
                duration: 1.4,
                delay: delay?delay:0.5,
                ease:[0.25, 0.25, 0.25, 0.75]
            },
        },
        hidden:{
            y:position=="button"? -80:0,
            x:position=="right"? 80:0,
            opacity:0,
            transition:{
                type:"tween",
                duration:0.5,
                delay:0.5,
                ease:[0.25,0.25,0.25,0.25]
            }
        }
    }
}

export function Reveal(props: RevealProps) {

    const{children, position, className, delay}=props
    const ref =useRef(null)
    const isInView=useInView(ref,{once:false})
    const mainControls=useAnimation()
    const slideControls=useAnimation()

    useEffect(()=>{
        if(isInView){
            mainControls.start("visible")
            slideControls.start("visile")
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[isInView])


  return (
    <div ref={ref}  >
        <motion.div
            className={className}
            variants={fadeIn(position,delay)}
            initial="hidden"
            animate={mainControls}
            exit="hidden"
            transition={{
                duration:0.5,
                delay:0.5,
            }}

        >
        {children}
        </motion.div>
        </div>
  )
}
