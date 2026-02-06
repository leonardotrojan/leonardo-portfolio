"use client"

import { Typewriter } from "react-simple-typewriter";
import Image from "next/image"

const HeroSection = () => {
    return ( 
        <div className="w-full min-h-[calc(100vh-75px)] flex items-center justify-center pl-5 gap-15">
            <div className="flex-1 p-4 ml-10">
                <h1 className="text-2xl">Olá! Eu sou Leonardo</h1>
                <div className="text-2xl text-purple-600">
                    <Typewriter
                      words={['< Desenvolvedor Full-Stack />']}
                      loop={0}
                      cursor
                      cursorStyle="|"
                      typeSpeed={50}
                      delaySpeed={30}
                    />
                </div>
                <p className="text-justify">Sou desenvolvedor full-stack com foco em aplicações modernas e bem 
                arquitetadas. Trabalho com JavaScript e TypeScript no front-end e back-end,
                 utilizando tecnologias como React, Next.js, Node.js e NestJS.
                Tenho interesse em construir sistemas completos, com código limpo, organização 
                e atenção a boas práticas, sempre buscando evoluir tecnicamente e aprender através
                 de projetos reais.</p>
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