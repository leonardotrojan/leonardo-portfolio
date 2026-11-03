import { ArrowUp } from "lucide-react";
import { social } from "@/data/social";

const links = [
    { ...social.github, external: true },
    { ...social.linkedin, external: true },
    { ...social.email, external: false },
]

const Footer = () => {
    return (
        <footer className="overflow-hidden border-t border-border">
            <div className="container-page">
                <div className="grid-page gap-y-6 py-8">
                    <p className="meta col-span-4 text-muted-foreground md:col-span-3">
                        © {new Date().getFullYear()} Leonardo Trojan
                    </p>
                    <ul className="col-span-4 flex flex-wrap gap-x-6 gap-y-2 md:col-span-6">
                        {links.map(({ label, url, external }) => (
                            <li key={label}>
                                <a
                                 href={url}
                                 {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                 className="meta text-muted-foreground transition-colors duration-300 hover:text-foreground"
                                >
                                    {label}
                                    {external && <span className="sr-only"> (abre em nova aba)</span>}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <a
                     href="#top"
                     className="meta group col-span-4 inline-flex items-center gap-2 text-muted-foreground transition-colors duration-300
                                hover:text-foreground md:col-span-3 md:justify-end"
                    >
                        Voltar ao topo
                        <ArrowUp className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" aria-hidden="true" />
                    </a>
                </div>

                <p
                 aria-hidden="true"
                 className="display select-none whitespace-nowrap pb-[0.04em] text-[16.2vw] leading-[0.78] text-surface
                            min-[96rem]:text-[15.4rem]"
                >
                    Trojan<span className="text-signal-ink">.</span>
                </p>
            </div>
        </footer>
     );
}

export default Footer;
