import { cn } from "@/lib/utils";

export function UiMainContainer({ className, children }) {
    return (
        <main className={cn("w-full flex flex-col", className)}>
            {children}
        </main>
    );
}
