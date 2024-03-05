import { cn } from "@/lib/utils";

export function UiDivider({ className }) {
    return (
        <div className={cn("w-[1px] min-h-full bg-gray-first", className)} />
    );
}
