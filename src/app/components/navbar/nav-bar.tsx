"use client"

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { social } from '@/data/social';
import { ThemeToggle } from '../theme-toggle';

const links = [
    { href: '/#work', label: 'Trabalho' },
    { href: '/#about', label: 'Sobre' },
    { href: '/#expertise', label: 'Expertise' },
    { href: '/#contact', label: 'Contato' },
]

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [active, setActive] = useState('')

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24)
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    // Só a home tem as seções; nas páginas de projeto nada fica ativo.
    useEffect(() => {
        const sections = ['top', ...links.map(({ href }) => href.slice(2))]
            .map((id) => document.getElementById(id))
            .filter((el): el is HTMLElement => el !== null)

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(entry.target.id === 'top' ? '' : `/#${entry.target.id}`)
                })
            },
            { rootMargin: '-45% 0px -50% 0px' }
        )

        sections.forEach((section) => observer.observe(section))
        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        if (!isOpen) return
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setIsOpen(false)
        }
        const desktop = window.matchMedia('(min-width: 48rem)')
        const onResize = () => desktop.matches && setIsOpen(false)

        document.documentElement.style.overflow = 'hidden'
        window.addEventListener('keydown', onKeyDown)
        desktop.addEventListener('change', onResize)
        return () => {
            document.documentElement.style.overflow = ''
            window.removeEventListener('keydown', onKeyDown)
            desktop.removeEventListener('change', onResize)
        }
    }, [isOpen])

    const close = () => setIsOpen(false)

    return (
        <header
         className={cn(
            'fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-500',
            'border-b',
            isOpen
                ? 'border-transparent bg-background'
                : scrolled
                    ? 'border-border bg-background/80 backdrop-blur-xl'
                    : 'border-transparent bg-transparent'
         )}
        >
            <nav aria-label="Principal" className="container-page grid-page h-16 items-center">
                <Link
                 href="/#top"
                 onClick={close}
                 className="col-span-2 flex items-center gap-2.5 text-sm font-semibold uppercase tracking-[-0.01em] md:col-span-3"
                >
                    <span aria-hidden="true" className="size-2 bg-signal-ink" />
                    Leonardo Trojan
                </Link>

                <p className="meta hidden items-center gap-2.5 text-muted-foreground lg:col-span-3 lg:flex">
                    <span className="relative flex size-1.5" aria-hidden="true">
                        <span className="pulse-dot absolute inset-0 rounded-full bg-signal-ink" />
                        <span className="relative size-1.5 rounded-full bg-signal-ink" />
                    </span>
                    Disponível para projetos
                </p>

                <div className="col-span-2 flex items-center justify-end gap-1 md:col-span-9 lg:col-span-6">
                    <ul className="hidden items-center md:flex">
                        {links.map(({ href, label }, i) => (
                            <li key={href}>
                                <Link
                                 href={href}
                                 aria-current={active === href ? 'true' : undefined}
                                 className={cn(
                                    'group relative flex items-baseline gap-1.5 px-3 py-2 text-sm transition-colors duration-300',
                                    active === href ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                                 )}
                                >
                                    <span
                                     aria-hidden="true"
                                     className={cn(
                                        'font-mono text-[10px] transition-colors duration-300',
                                        active === href ? 'text-signal-ink' : 'text-muted-foreground/60'
                                     )}
                                    >
                                        0{i + 1}
                                    </span>
                                    {label}
                                    <span
                                     aria-hidden="true"
                                     className={cn(
                                        'absolute inset-x-3 -bottom-px h-px origin-left bg-signal-ink transition-transform duration-500 ease-out-expo',
                                        active === href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100 group-hover:bg-foreground'
                                     )}
                                    />
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <span aria-hidden="true" className="mx-3 hidden h-4 w-px bg-border-strong md:block" />

                    <ThemeToggle />

                    <button
                     type="button"
                     className="-mr-2 flex h-10 cursor-pointer items-center gap-3 px-2 md:hidden"
                     aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
                     aria-expanded={isOpen}
                     aria-controls="mobile-menu"
                     onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className="meta text-muted-foreground" aria-hidden="true">{isOpen ? 'Fechar' : 'Menu'}</span>
                        <span className="relative block h-2.5 w-5" aria-hidden="true">
                            <span
                             className={cn(
                                'absolute left-0 top-0 h-px w-full bg-foreground transition-transform duration-500 ease-out-expo',
                                isOpen && 'translate-y-[5px] rotate-45'
                             )}
                            />
                            <span
                             className={cn(
                                'absolute bottom-0 left-0 h-px w-full bg-foreground transition-transform duration-500 ease-out-expo',
                                isOpen && '-translate-y-[4px] -rotate-45'
                             )}
                            />
                        </span>
                    </button>
                </div>
            </nav>

            <span aria-hidden="true" className="scroll-progress absolute inset-x-0 -bottom-px h-px bg-signal-ink" />

            <div
             id="mobile-menu"
             className={cn(
                'fixed inset-x-0 bottom-0 top-16 flex flex-col bg-background transition-[opacity,visibility] duration-500 md:hidden',
                isOpen ? 'visible opacity-100' : 'invisible opacity-0'
             )}
             inert={!isOpen}
            >
                <ul className="container-page flex-1 pt-6">
                    {links.map(({ href, label }, i) => (
                        <li key={href} className="border-b border-border">
                            <Link
                             href={href}
                             onClick={close}
                             className="flex items-baseline justify-between py-4"
                            >
                                <span
                                 className={cn(
                                    'display text-[3.25rem] transition-transform duration-700 ease-out-expo',
                                    isOpen ? 'translate-y-0' : 'translate-y-4'
                                 )}
                                 style={{ transitionDelay: isOpen ? `${80 + i * 50}ms` : '0ms' }}
                                >
                                    {label}
                                </span>
                                <span className="meta text-muted-foreground">0{i + 1}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="container-page flex items-end justify-between gap-4 pb-8">
                    <a href={social.email.url} className="text-sm text-muted-foreground underline underline-offset-4">
                        {social.email.handle}
                    </a>
                    <p className="meta flex items-center gap-2 text-muted-foreground">
                        <span aria-hidden="true" className="size-1.5 rounded-full bg-signal-ink" />
                        Disponível
                    </p>
                </div>
            </div>
        </header>
     );
}

export default NavBar;
