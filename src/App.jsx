import React from 'react';
import Navbar from "./components/navbar.jsx";
import Hero from "./components/hero.jsx";
import About from "./components/about.jsx";

export default function App() {
    return (
        <h1>
            <Navbar/>
            <Hero/>
            <About/>
        </h1>
    )
}