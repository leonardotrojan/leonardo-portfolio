import { cva } from "class-variance-authority";

export const cta = cva(
    "group/cta relative inline-flex items-center justify-center gap-3 font-mono text-xs uppercase tracking-[0.08em] " +
    "whitespace-nowrap transition-[background-color,border-color,color] duration-300 " +
    "[&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:transition-transform [&_svg]:duration-300 [&_svg]:ease-out-expo",
    {
        variants: {
            variant: {
                primary:
                    "bg-signal text-signal-foreground hover:bg-foreground hover:text-background",
                secondary:
                    "border border-border-strong text-foreground hover:border-foreground hover:bg-foreground hover:text-background",
                ghost:
                    "text-muted-foreground hover:text-foreground",
            },
            size: {
                default: "h-12 px-6",
                lg: "h-14 px-7 sm:h-16 sm:px-8",
                sm: "h-9 px-0",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "default",
        },
    }
)
