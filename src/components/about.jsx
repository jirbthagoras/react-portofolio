import React from 'react';
import siRajaIblis from "../assets/WhatsApp Image 2024-10-10 at 2.18.48 PM.jpeg"
import bg from "../assets/Download Red grunge texture banner for free.jpeg"

const About = () => {
    return (
        <section id="about" className="py-20 bg-cover h-auto bg-red-800">

            <div className="container mx-auto text-center px-6">

                <h2 className="text-4xl font-bold text-white font-mono">Tentang saya:</h2>

                <div className="flex-col flex items-center mb-12">
                    <img src={`${siRajaIblis}`} alt="RajaIblis"
                         className={"mt-2 w-60 h-60 rounded-full object-cover mb-4 shadow-lg"}/>
                    <p className={"text-2xl font-bold text-white font-mono mb-2"}>Software Engineer</p>
                    <p className={"text-2xl text-white font-semibold"}>Fulltime Schizophrenic Guy</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div
                        className="bg-white p-6 rounded-lg shadow-lg hover:border-gray-50 transition-colors duration-300">
                        <h3 className="text-2xl font-bold mb-4 text-rose-700">Backend Development</h3>
                        <p className="text-gray-700 mb-4">
                            I Develop A Server Side Application That Works Well.
                        </p>
                    </div>

                    <div
                        className="bg-white p-6 rounded-lg shadow-lg hover:border-gray-50 transition-colors duration-300">
                        <h3 className="text-2xl font-bold mb-4 text-rose-700">Web Development</h3>
                        <p className="text-gray-700 mb-4">
                            Even Though I Can't Do The Client-Side Well, I Still Can Make A MVP WebApp
                        </p>
                    </div>
                </div>
                <p className="text-4xl mt-8 text-white font-bold">
                    I Do Also Mentoring Backend Class At SnapanDev Community
                </p>
            </div>
        </section>
    )
}

export default About;