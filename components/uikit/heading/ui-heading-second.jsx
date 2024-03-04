import { cn } from "@/lib/utils";

export function UiHeadingSecond({ className, children }) {
    return (
        <h2
            className={cn(
                `
                    max-w-[335px] text-2xl leading-[31px] text-white font-bold
                    min-[450px]:max-w-[482.5px] md:text-4xl
                    lg:max-w-[630px] lg:text-5xl lg:leading-[62.4px]
                `,
                className
            )}
        >
            {children}
        </h2>
    );
}
