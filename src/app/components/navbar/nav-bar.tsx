"use client"

import { useState } from 'react';
import { ThemeToggle } from '../theme-toggle';

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false)

    return ( 
        <nav className="p-6 border-b border-gray-300 flex justify-between fixed w-full h-[75px]
                        backdrop-blur-lg z-50">
            <div>
                <ul className="hidden md:flex justify-evenly gap-8">
                    <li className="hover:border-b-2 border-purple-400 hover:-translate-y-1 transition delay-100 duration-200">
                        <a href="#about">sobre mim</a>
                    </li>
                    <li className="hover:border-b-2 border-purple-400 hover:-translate-y-1 transition delay-100 duration-200">
                        <a href="#skills">habilidades</a>
                    </li>
                    <li className="hover:border-b-2 border-purple-400 hover:-translate-y-1 transition delay-100 duration-200">
                        <a href="#projects">projetos</a>
                    </li>
                    <li className="hover:border-b-2 border-purple-400 hover:-translate-y-1 transition delay-100 duration-200">
                        <a href="#contact">contato</a>
                    </li>
                </ul>

                <div className='md:hidden flex items-center'>
                    <button
                     className='flex flex-col w-6 h-6 justify-between items-center cursor-pointer'
                     onClick={() => setIsOpen(!isOpen)}
                    >
                        <span
                         className={`h-0.5 w-full bg-black dark:bg-white transform transition duration-300 ${
                            isOpen ? 'rotate-45 translate-y-2' : ''
                         }`}
                        ></span>
                        <span
                         className={`h-0.5 w-full bg-black dark:bg-white transform transition duration-300 ${
                            isOpen ? '-rotate-45 -translate-y-2' : ''
                         }`} 
                        ></span>
                    </button>
                </div>
                <div
        className={`absolute top-[75px] left-0 w-full bg-white dark:bg-gray-800 transition-transform duration-300 overflow-hidden md:hidden ${
          isOpen ? 'max-h-96' : 'max-h-0'
                }`}
            >
                <ul className="flex flex-col p-6 gap-4">
                <li className="hover:text-purple-400 transition">{/* mesma coisa que antes */}
                    <a href="#about" onClick={() => setIsOpen(false)}>sobre mim</a>
                </li>
                <li className="hover:text-purple-400 transition">
                    <a href="#skills" onClick={() => setIsOpen(false)}>habilidades</a>
                </li>
                <li className="hover:text-purple-400 transition">
                    <a href="#projects" onClick={() => setIsOpen(false)}>projetos</a>
                </li>
                <li className="hover:text-purple-400 transition">
                    <a href="#contact" onClick={() => setIsOpen(false)}>contato</a>
                </li>
                </ul>
            </div>
            </div>
            <div>
                <ThemeToggle />
            </div>
        </nav>
     );
}
 
export default NavBar;