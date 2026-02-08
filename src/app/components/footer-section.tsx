import { Github, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

const Footer = () => {
    return ( 
        <div className="w-full h-[10em] bg-card flex justify-center items-center gap-8">
            <div className="rounded-full p-3 bg-background hover:scale-110 hover:bg-foreground/10 transition cursor-pointer">
                <Instagram height={40} width={40} />
            </div>
            <div className="rounded-full p-3 bg-background hover:scale-110 hover:bg-foreground/10 transition cursor-pointer">
                <Linkedin height={40} width={40} />
            </div>
            <div className="rounded-full p-3 bg-background hover:scale-110 hover:bg-foreground/10 transition cursor-pointer">
                <Github height={40} width={40} />
            </div>
        </div>
     );
}
 
export default Footer;