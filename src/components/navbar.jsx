import React from 'react';
import mbakAsai from '../assets/asai.jpeg'

const Navbar = () =>
{
    return (
        <nav className="bg-red-800 p-4">
            <div className="container mx-auto flex items-center justify-between">
                <div>
                    <img src={`${mbakAsai}`} alt="Ini Asai"
                         className="object-scale-down h-20 max-w-full drop-shadow-md rounded-full"/>

                </div>
                <div>
                    <h1 className="text-5xl font-bold font-mono text-white">jirb.php</h1>
                </div>
                <div>
                    <a href="#about" className="font-mono text-2xl font-bold text-gray-300 hover:text-white mx-4 transition duration-300">about</a>
                    <a href="#projects" className="font-mono text-2xl font-bold text-gray-300 hover:text-white mx-4 transition duration-300">project</a>
                    <a href="#contact" className="font-mono text-2xl font-bold text-gray-300 hover:text-white mx-4 transition duration-300">contact</a>
                </div>

            </div>

        </nav>
    )
}

export default Navbar;