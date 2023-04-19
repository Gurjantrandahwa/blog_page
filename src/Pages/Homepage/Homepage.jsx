import React from 'react'
import Navbar from "../../Components/Navbar/Navbar";
import HeroSection from "../../Components/HeroSection/HeroSection";
import Tech from "../../Components/Tech/Tech";
import Explore from "../../Components/Explore/Explore";

export const Homepage = () => {
    return <div>
        <Navbar/>
        <HeroSection/>
        <Tech/>
        <Explore/>
    </div>
}
