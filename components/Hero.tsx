import React from 'react'
import {Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "../components/BackgroundCircles";
type Props = {}

export default function Hero({}: Props) {
    {/* Install react-simple-typewriter */}
    const [text,count] = useTypewriter({
        words: ["coding", "canoying", "guitar", "coffee"],
        loop: true,
        delaySpeed: 2000
    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <h1>
            Hi there! I am Alberto Castel
            <p>I enjoy <span>{text}<Cursor cursorColor='grey' /></span></p>
            
        </h1>
    </div>
  )
}