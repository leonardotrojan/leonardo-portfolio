import { Github, Linkedin, Mail } from "lucide-react";
import ContactForm from "./contact-form/form";
import Link from "next/link";

const ContactSection = () => {
    return ( 
        <div id="contact" className="min-h-screen flex flex-col gap-15 justify-center">
            <h1 className="text-3xl text-center font-bold">Entre em <span className="text-blue-600">contato</span></h1>
            <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-2 px6">
                <div className="w-full md:w-1/2">
                    <Link href="https://www.linkedin.com/in/leonardo-trojan/" target="_blank">
                        <div className="border-2 m-3 rounded-md p-5 bg-gradient-to-br
                                        from-[rgb(var(--social-card-gradient-start))]
                                        to-[rgb(var(--social-card-gradient-end))] transition-colors
                                        duration-300 cursor-pointer">
                            <div className="flex items-center gap-2">
                                <Linkedin width={20} height={20}/>
                                <h1 className="font-semibold text-lg">LinkedIn</h1>
                            </div>
                            <p className="text-zinc-700 dark:text-zinc-400">Vamos nos conectar</p>
                        </div>
                    </Link>
                    <Link href="https://github.com/leonardotrojan" target="_blank">
                    <div className="border-2 m-3 rounded-md p-5 bg-gradient-to-br 
                                    from-[rgb(var(--social-card-gradient-start))] 
                                    to-[rgb(var(--social-card-gradient-end))] transition-colors
                                    duration-300 cursor-pointer">
                        <div className="flex items-center gap-2">
                            <Github width={20} height={20}/>
                            <h1 className="font-semibold text-lg">GitHub</h1>
                        </div>
                        <p className="text-zinc-700 dark:text-zinc-400">Veja meus projetos</p>
                    </div>
                    </Link>
                    <Link href="mailto:leonardo.trojan.dev@gmail.com" target="_blank">
                    <div className="border-2 m-3 rounded-md p-5 bg-gradient-to-br 
                                    from-[rgb(var(--social-card-gradient-start))] 
                                    to-[rgb(var(--social-card-gradient-end))] transition-colors
                                    duration-300 cursor-pointer">
                        <div className="flex items-center gap-2">
                            <Mail width={20} height={20}/>
                            <h1 className="font-semibold text-lg">Email</h1>
                        </div>
                        <p className="text-zinc-700 dark:text-zinc-400">Entrar em contato</p>
                    </div>
                    </Link>
                </div>
                <div className="w-full md:w-1/2 p-3">
                    <ContactForm />
                </div>
            </div>
        </div>
     );
}
 
export default ContactSection;