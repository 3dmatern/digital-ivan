import { cn } from "@/lib/utils";

export function UiDivContainer({ className, children }) {
    return (
        <div
            className={cn(
                `
                    container flex flex-col gap-8
                    pt-14 px-5 pb-14 lg:pt-40 lg:pb-40
                `,
                className
            )}
        >
            {children}
        </div>
    );
}
