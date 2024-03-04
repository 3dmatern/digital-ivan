import { cn } from "@/lib/utils";

export function UiHeadingFourth({ className, children }) {
    return (
        <h3
            className={cn(
                `
                    text-2xl text-white font-bold
                `,
                className
            )}
        >
            {children}
        </h3>
    );
}
