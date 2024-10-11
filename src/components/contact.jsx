import React from 'react';

const Contact = () =>
{
    return (
        <section id={"contact"} className={"py-20 bg-gray-100"}>
            <div className={"container mx-auto px-6 text-center"}>
                <h2 className={"text-4xl font-bold mb-8 text-gray-800"}>
                    Contact Me!
                    <p className={"text-xl mb-4 text-gray-600"}>
                        Leave Me A Message Bruv
                    </p>
                    <a href="mailto:hansjabriel@gmail.com" className={"text-2xl bg-rose-700 hover:bg-rose-500 text-white py2 rounded-lg shadow-md transition duration-300"}>
                        Pls Mail Aku King
                    </a>
                </h2>
            </div>
        </section>
    )
}

export default Contact;