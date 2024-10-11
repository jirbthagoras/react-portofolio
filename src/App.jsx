import React from 'react';
import Navbar from "./components/navbar.jsx";
import Hero from "./components/hero.jsx";
import About from "./components/about.jsx";
import Project from "./components/project.jsx";
import Contact from "./components/contact.jsx";
import Footer from "./components/footer.jsx";

export default function App() {
    return (
        <h1>
            <Navbar/>
            <Hero/>
            <About/>
            <Project/>
            <Contact/>
            <Footer/>
        </h1>
    )
}