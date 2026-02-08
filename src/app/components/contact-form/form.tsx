"use client"

import { Button } from "@/components/ui/button";
import { FieldGroup } from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {

    const [state, handleSubmit] = useForm("mqedkjpr")
    if (state.succeeded) {
  return (
    <div className="text-center p-6">
      <h3 className="text-lg font-semibold">Mensagem enviada ✅</h3>
      <p className="text-sm opacity-80">
        Obrigado pelo contato! Responderei em breve.
      </p>
    </div>
  )
}


    return ( 
        <div className="p-4 rounded-xl bg-gradient-to-br 
                        from-[rgb(var(--social-card-gradient-start))] 
                        to-[rgb(var(--social-card-gradient-end))] transition-colors
                        duration-300">
            <form
             onSubmit={handleSubmit}
            >
                <FieldGroup className="w-full max-w-sm mx-auto">
                    <InputGroup className="h-auto">
                    <InputGroupInput
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Digite o seu nome"
                        required
                    />
                    </InputGroup>
                    <InputGroup className="h-auto">
                    <InputGroupInput
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Digite o seu email"
                        required
                    />
                    </InputGroup>
                    <ValidationError 
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                    <InputGroup>
                    <InputGroupTextarea
                        id="message"
                        name="message"
                        placeholder=""
                        className="font-mono text-sm"
                        required
                    />
                    <InputGroupAddon align="block-start">
                        <InputGroupText className="font-mono">Sua mensagem</InputGroupText>
                        <InputGroupButton size="icon-xs" className="ml-auto">
                        </InputGroupButton>
                    </InputGroupAddon>
                    </InputGroup>
                    <ValidationError 
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
                </FieldGroup>
                <Button type="submit" disabled={state.submitting} className="bg-blue-500 font-bold text-foreground mt-5 w-full">
                        Enviar
                    </Button>
            </form>
        </div>
     );
}
 
export default ContactForm;