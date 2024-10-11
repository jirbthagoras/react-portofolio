import React from 'react';
import cover from "../assets/715624.png";

const Hero = () =>
{
    return (
        <section className="bg-cover bg-center h-screen text-white"
        style={{backgroundImage: `url(${cover})`}}>

            <div className="bg-black bg-opacity-60 h-full flex flex-col justify-center items-center text-center p-6">
                <h1 className="text-6xl font-bold mb-4">Yo, I'm Jabriel</h1>
                <p className="text-2xl mb-8">Aku sukanya <strong className="text-rose-700 bg-white rounded">Laravel</strong> tapi sayangnya ini dibuat make <strong className="text-teal-500 bg-white rounded">React</strong>
                </p>
                <a href="#projects" className="bg-rose-700 hover:bg-rose-500 text-white font-bold py-2 px-6 rounded-lg shadow-lgm transition duration-300">Lihat Projekku!</a>
            </div>

        </section>
    )
}

export default Hero