import { ArrowUpRight } from "lucide-react";
import { resumeUrl, social } from "@/data/social";
import CopyEmail from "./contact-form/copy-email";
import ContactForm from "./contact-form/form";
import Magnetic from "./shared/magnetic";
import Reveal from "./shared/reveal";
import Words from "./shared/words";

const channels = [
    { label: social.linkedin.label, handle: social.linkedin.handle, url: social.linkedin.url, external: true },
    { label: social.github.label, handle: social.github.handle, url: social.github.url, external: true },
    { label: 'Currículo', handle: 'PDF', url: resumeUrl, external: false },
]

const ContactSection = () => {
    return (
        <section id="contact" aria-labelledby="contact-title" className="section-y scroll-mt-16 pb-16 md:pb-20">
            <div className="container-page">
                <div className="grid-page border-t border-border-strong pt-6">
                    <Reveal className="col-span-2 md:col-span-3">
                        <p className="meta flex gap-3 text-muted-foreground">
                            <span className="text-signal-ink">(04)</span>
                            Contato
                        </p>
                    </Reveal>
                    <Reveal className="col-span-2 md:col-span-9">
                        <p className="meta flex items-center justify-end gap-2.5 text-muted-foreground md:justify-start">
                            <span className="relative flex size-1.5" aria-hidden="true">
                                <span className="pulse-dot absolute inset-0 rounded-full bg-signal-ink" />
                                <span className="relative size-1.5 rounded-full bg-signal-ink" />
                            </span>
                            Disponível para novas oportunidades
                        </p>
                    </Reveal>
                </div>

                <Reveal mode="words" className="mt-16 md:mt-24">
                    <h2
                     id="contact-title"
                     lang="en"
                     className="display text-[clamp(3rem,15vw,6rem)] md:text-[clamp(5rem,11vw,12rem)]"
                    >
                        <span className="block"><Words text="Let's build" stagger={80} /></span>
                        <span className="block md:pl-[calc((100%+1.5rem)/12*3)]">
                            <span className="mask">
                                <span style={{ "--delay": "160ms" } as React.CSSProperties}>
                                    something<span className="text-signal-ink">.</span>
                                </span>
                            </span>
                        </span>
                    </h2>
                </Reveal>

                <div className="grid-page mt-16 gap-y-16 md:mt-28">
                    <Reveal className="col-span-4 md:col-span-6">
                        <p className="max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
                            Aberto a novas oportunidades, projetos e boas conversas sobre produto e tecnologia.
                            O caminho mais curto é o email.
                        </p>

                        <div className="mt-10">
                            <Magnetic strength={0.15}>
                                <a
                                 href={social.email.url}
                                 className="group relative inline-block pb-2 text-[clamp(1.25rem,5.4vw,2.5rem)] font-medium tracking-[-0.03em] break-all
                                            sm:break-normal"
                                >
                                    {social.email.handle}
                                    <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-border-strong" />
                                    <span
                                     aria-hidden="true"
                                     className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-signal-ink transition-transform duration-700
                                                ease-out-expo group-hover:scale-x-100"
                                    />
                                </a>
                            </Magnetic>
                            <div className="mt-3">
                                <CopyEmail email={social.email.handle} />
                            </div>
                        </div>

                        <ul className="mt-14 border-t border-border">
                            {channels.map(({ label, handle, url, external }) => (
                                <li key={label} className="border-b border-border">
                                    <a
                                     href={url}
                                     {...(external ? { target: "_blank", rel: "noopener noreferrer" } : { download: true })}
                                     className="group flex items-center gap-4 py-5"
                                    >
                                        <span className="meta w-24 text-muted-foreground">{label}</span>
                                        <span className="min-w-0 flex-1 truncate transition-transform duration-500 ease-out-expo group-hover:translate-x-1.5">
                                            {handle}
                                        </span>
                                        <ArrowUpRight
                                         className="size-4 shrink-0 text-muted-foreground transition-[color,transform] duration-300
                                                    group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal-ink"
                                         aria-hidden="true"
                                        />
                                        {external && <span className="sr-only">(abre em nova aba)</span>}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </Reveal>

                    <Reveal delay={120} className="col-span-4 md:col-span-6 lg:col-start-8 lg:col-span-5">
                        <h3 className="meta text-muted-foreground">Ou escreva por aqui</h3>
                        <div className="mt-6">
                            <ContactForm />
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
     );
}

export default ContactSection;
