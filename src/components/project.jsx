import React from 'react';
import crud from '../assets/livewireCRUD.png';
import chat from '../assets/Pasted image.png';

const Project = () => {
    return (
        <section id="project" className="py-20 bg-white">
            <div className="container mx-auto text-center">
                <h2 className=" text-2xl font-bold mb-8">Project Guwah</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-gray-100 p-4 rounded">
                        <img src={`${crud}`} alt="Livewire ToDo" className="w-full h-48 object-cover mb-4 rounded"/>
                        <h3 className="text-2xl font-bold mb-2">Livewire Todo App</h3>
                        <p className="text-gray-700">Simple ToDoApp Using The GOAT Laravel And Livewire</p>
                    </div>

                    <div className="bg-gray-100 p-4 rounded">
                        <img src={`${chat}`} alt="Livewire ToDo" className="w-full h-48 object-cover mb-4 rounded"/>
                        <h3 className="text-2xl font-bold mb-2">Laravel Realtime Chat</h3>
                        <p className="text-gray-700">Laravel Realtime App Using Livewire + Pusher (For Socket) + Laravel Breeze Da Goat</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Project;