import { cn } from "@/lib/utils";

export function DifferenceCard({ children }) {
    return (
        <div className="max-w-[335px] flex flex-col gap-4 text-white md:max-w-[300px]">
            {children}
        </div>
    );
}

DifferenceCard.Icon = function DifferenceCardIcon({ className, children }) {
    return <div className={cn("size-12", className)}>{children}</div>;
};

DifferenceCard.Body = function DifferenceCardIcon({
    className,
    title,
    description,
}) {
    return (
        <div className={cn("flex flex-col gap-2", className)}>
            {title}
            {description}
        </div>
    );
};
