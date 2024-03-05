import Link from "next/link";

import { cn } from "@/lib/utils";

export function UiLink({
    href,
    variant = "default",
    className,
    children,
    ...rest
}) {
    return (
        <Link
            {...rest}
            href={href}
            className={cn(
                "text-sm leading-[21px]  transition-colors",
                {
                    default: "text-white hover:text-prim",
                    reverse: "text-prim hover:text-white",
                }[variant],
                className
            )}
        >
            {children}
        </Link>
    );
}
