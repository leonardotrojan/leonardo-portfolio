"use client"

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useForm, ValidationError } from "@formspree/react";
import { ArrowRight, Check } from "lucide-react";
import { cta } from "../shared/cta";

// Campos editoriais: só a linha de base, que acende no foco.
const fieldClass =
    "h-12 rounded-none border-0 border-b border-border-strong bg-transparent px-0 text-base shadow-none dark:bg-transparent " +
    "placeholder:text-muted-foreground/50 focus-visible:border-signal-ink focus-visible:ring-0 focus-visible:outline-none " +
    "transition-colors duration-300"

const labelClass = "font-mono text-[11px] font-normal uppercase tracking-[0.08em] text-muted-foreground"

const errorClass = "text-sm text-destructive"

const ContactForm = () => {

    const [state, handleSubmit] = useForm("mqedkjpr")

    if (state.succeeded) {
        return (
            <div role="status" className="flex flex-col items-start gap-4 border-t border-foreground pt-6">
                <span className="grid size-10 place-items-center bg-signal text-signal-foreground">
                    <Check className="size-4" aria-hidden="true" />
                </span>
                <h3 className="text-2xl font-medium tracking-tight">Mensagem enviada.</h3>
                <p className="text-[15px] text-muted-foreground">
                    Obrigado pelo contato! Responderei em breve.
                </p>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <div className="grid gap-8 sm:grid-cols-2 sm:gap-6">
                <div className="flex flex-col gap-1">
                    <Label htmlFor="name" className={labelClass}>Nome</Label>
                    <Input
                     id="name"
                     name="name"
                     type="text"
                     autoComplete="name"
                     placeholder="Seu nome"
                     required
                     className={fieldClass}
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <Label htmlFor="email" className={labelClass}>Email</Label>
                    <Input
                     id="email"
                     name="email"
                     type="email"
                     autoComplete="email"
                     placeholder="voce@email.com"
                     required
                     className={fieldClass}
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className={errorClass} />
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <Label htmlFor="message" className={labelClass}>Mensagem</Label>
                <Textarea
                 id="message"
                 name="message"
                 placeholder="Conte um pouco sobre a oportunidade ou o projeto"
                 required
                 className={`${fieldClass} min-h-32 resize-y py-3`}
                />
                <ValidationError prefix="Mensagem" field="message" errors={state.errors} className={errorClass} />
            </div>
            <ValidationError errors={state.errors} className={errorClass} />
            <button
             type="submit"
             disabled={state.submitting}
             className={cta({ variant: 'secondary', className: 'w-full cursor-pointer disabled:cursor-wait disabled:opacity-60 sm:w-auto sm:self-start' })}
            >
                {state.submitting ? 'Enviando…' : 'Enviar mensagem'}
                <ArrowRight className="group-hover/cta:translate-x-1" />
            </button>
        </form>
     );
}

export default ContactForm;
