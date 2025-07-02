import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from "gsap/all";
import Nawbar from "./Components/Nawbar.jsx";
import Hero from "./Components/Hero.jsx";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
    return (
        <main>
            <Nawbar/>
            <Hero/>
        </main>
    )
}
export default App
