import { cn } from "@/lib/utils";

export function UiHeadingSecond({ className, children }) {
    return (
        <h2
            className={cn(
                `
                    max-w-[335px] text-2xl text-white font-bold
                    min-[450px]:max-w-[482.5px] sm:text-4xl
                    md:max-w-[630px] md:text-5xl
                `,
                className
            )}
        >
            {children}
        </h2>
    );
}
