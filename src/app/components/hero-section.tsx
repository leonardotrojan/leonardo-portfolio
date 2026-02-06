"use client"

import { Typewriter } from "react-simple-typewriter";
import Image from "next/image"
import { useEffect, useState } from "react";

const HeroSection = () => {

    const [mounted, setMounted] = useState(false)

    useEffect(() => setMounted(true), [])

    if(!mounted) return null

    return ( 
        <div id="about" className="w-full min-h-screen flex items-center 
                                justify-center p-10 md:p-5 gap-0 md:gap-15 flex-col 
                                md:flex-row scroll-mt-24 pt-30 md:pt-5">
            <div className="flex-1 p-4 ml-0 md:ml-10">
                <h1 className="text-2xl text-center md:text-left">Olá! Eu sou Leonardo</h1>
                <div className="text-2xl text-purple-600 text-center md:text-left">
                    <Typewriter
                      words={['< Desenvolvedor Full-Stack />']}
                      loop={0}
                      cursor
                      cursorStyle="|"
                      typeSpeed={50}
                      delaySpeed={30}
                    />
                </div>
                <p className="text-justify pt-10 md:pt-3">Sou desenvolvedor full-stack com foco em construir aplicações modernas, 
                    bem estruturadas e próximas de cenários reais de produção. Trabalho principalmente com JavaScript e TypeScript, 
                    atuando tanto no front-end quanto no back-end, sempre buscando clareza de arquitetura, código limpo e boas 
                    práticas.
                    Tenho experiência com desenvolvimento front-end utilizando React, Next.js e Tailwind CSS, além de back-end com Node.js
                     e NestJS, criando APIs organizadas, fluxos completos de aplicação e integrações entre sistemas.
                    Gosto de entender o “porquê” por trás das decisões técnicas e estou em constante evolução, buscando aprender na prática
                     e transformar ideias em soluções funcionais. Atualmente, meu foco é crescer profissionalmente como desenvolvedor, 
                     contribuindo com projetos reais e aprendendo todos os dias.</p>
            </div>
            <div className="flex-1 flex justify-center">
                <div className="w-70 h-70 mr-10">
                    <Image
                      src="/leo-picture.jpeg"
                      alt="Foto-leonardo"
                      width={500}
                      height={100}
                      className="w-full h-full object-cover rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.0025)] shadow-sky-300"
                    />
                </div>
            </div>
        </div>
     );
}
 
export default HeroSection;