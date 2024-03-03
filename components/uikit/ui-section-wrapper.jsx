import { cn } from "@/lib/utils";

export function UiSectionWrapper({ className, children }) {
    return (
        <section className={cn("w-full h-max", className)}>{children}</section>
    );
}
