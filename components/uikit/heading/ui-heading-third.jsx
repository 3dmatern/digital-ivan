import { cn } from "@/lib/utils";

export function UiHeadingThird({ className, children }) {
    return (
        <h3
            className={cn(
                `
                    text-xl text-white font-bold
                    md:text-2xl
                `,
                className
            )}
        >
            {children}
        </h3>
    );
}
