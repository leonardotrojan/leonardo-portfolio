"use client"

import { Check, Copy } from "lucide-react";
import { useEffect, useState } from "react";

const CopyEmail = ({ email }: { email: string }) => {

    const [copied, setCopied] = useState(false)

    useEffect(() => {
        if (!copied) return
        const timeout = setTimeout(() => setCopied(false), 2000)
        return () => clearTimeout(timeout)
    }, [copied])

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(email)
            setCopied(true)
        } catch {
            // Sem permissão de clipboard: o link mailto ao lado continua funcionando.
        }
    }

    return (
        <button
         type="button"
         onClick={copy}
         className="inline-flex h-9 cursor-pointer items-center gap-2 font-mono text-xs uppercase tracking-[0.08em] text-muted-foreground transition-colors duration-300 hover:text-foreground"
        >
            {copied
                ? <Check className="size-3.5 text-signal-ink" aria-hidden="true" />
                : <Copy className="size-3.5" aria-hidden="true" />}
            <span aria-live="polite">{copied ? 'Copiado' : 'Copiar email'}</span>
        </button>
    );
}

export default CopyEmail;
