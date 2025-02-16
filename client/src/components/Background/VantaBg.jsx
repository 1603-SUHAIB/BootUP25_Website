import React, { useEffect, useRef } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";
import './vanta.css'

const Vanta = () => {
 useEffect(()=> {
    BIRDS({
        el:'#vanta',
        mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  backgroundColor: 0x0,
  color1: 0xd800ff,
  color2: 0xf4f4f4,
  colorMode: "lerp",
  speedLimit: 4.00,
  separation: 100.00,
  alignment: 27.00,
  cohesion: 44.00,
  quantity: 4.00
    })
 },[])
 return(
    <div className="backg">
        <div className="bg" id="vanta">
        </div>
    </div>
 )
};

export default Vanta;
