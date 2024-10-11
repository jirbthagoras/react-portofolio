import React from 'react';
import siRajaIblis from "../assets/WhatsApp Image 2024-10-10 at 2.18.48 PM.jpeg"

const About = () => {
    return (
        <section id="about" className="py-20 bg-gray-100">
            <div className="container mx-auto text-center px-6">
                <h2 className="text-4xl font-bold mb-8 text-gray-800">
                    Ini Gua
                </h2>

                <div className="flex flex-col items-center mb-12">
                    <img src={`${siRajaIblis}`} alt="RajaIblis" className={"w-36 h-36 rounded-full object-cover mb-4 shadow-lg"}/>
                    <p className={"text-lg text-gray-600 mb-2"}>Software Engineer</p>
                    <p className={"text-lg text-gray-600 mb-2"}>Fulltime Schizophrenic Guy</p>
                </div>
            </div>
        </section>
    )
}

export default About;