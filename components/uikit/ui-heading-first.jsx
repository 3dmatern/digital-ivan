import { cn } from "@/lib/utils";

export function UiHeadingFirst({ className, children }) {
    return (
        <h1
            className={cn(
                `
                    max-w-[335px] text-[32px] leading-[41.6px] text-white font-bold
                    min-[450px]:max-w-[502.5px] sm:text-[48px] sm:leading-[62.4px]
                    md:max-w-[770px] md:text-[64px] md:leading-[83.2px]
                `,
                className
            )}
        >
            {children}
        </h1>
    );
}
