import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return ( 
        <div className="w-full h-[10em] bg-card flex justify-center items-center gap-8
                        bg-gradient-to-br 
                        from-[rgb(var(--card-gradient-start))] 
                        to-[rgb(var(--card-gradient-end))] transition-colors
                        duration-300">
            <Link href="mailto:leonardo.trojan.dev@gmail.com" target="_blank">
                <div className="rounded-full p-3 bg-background hover:scale-110 hover:bg-foreground/10 transition cursor-pointer">
                    <Mail height={40} width={40} />
                </div>
            </Link>
            <Link href="https://www.linkedin.com/in/leonardo-trojan/" target="_blank">
                <div className="rounded-full p-3 bg-background hover:scale-110 hover:bg-foreground/10 transition cursor-pointer">
                    <Linkedin height={40} width={40} />
                </div>
            </Link>
            <Link href="https://github.com/leonardotrojan" target="_blank">
                <div className="rounded-full p-3 bg-background hover:scale-110 hover:bg-foreground/10 transition cursor-pointer">
                    <Github height={40} width={40} />
                </div>
            </Link>
        </div>
     );
}
 
export default Footer;