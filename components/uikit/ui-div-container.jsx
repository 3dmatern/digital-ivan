import { cn } from "@/lib/utils";

export function UiDivContainer({ containerRef, className, children }) {
    return (
        <div
            ref={containerRef}
            className={cn(
                `
                    container flex flex-col gap-8
                    pt-14 pb-14 lg:pt-40 lg:pb-40
                `,
                className
            )}
        >
            {children}
        </div>
    );
}
