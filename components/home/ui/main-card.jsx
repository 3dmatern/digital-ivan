import { cn } from "@/lib/utils";

export function MainCard({ children }) {
    return (
        <div className="max-w-[335px] flex flex-col gap-4 text-white md:max-w-[300px]">
            {children}
        </div>
    );
}

MainCard.Icon = function MainCardIcon({ className, children }) {
    return <div className={cn("size-12", className)}>{children}</div>;
};

MainCard.Body = function MainCardIcon({ className, title, description }) {
    return (
        <div className={cn("flex flex-col gap-2", className)}>
            {title}
            {description}
        </div>
    );
};
