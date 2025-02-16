import React, { useEffect, useRef } from "react";
import BIRDS from "vanta/dist/vanta.net.min";
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
        color: 0xe73fff,
        backgroundColor: 0x0,
        points: 8.00,
        maxDistance: 24.00,
        spacing: 16.00
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
