import Link from "next/link";

import { cn } from "@/lib/utils";

export function UiLink({ href, className, children, ...rest }) {
    return (
        <Link
            {...rest}
            href={href}
            className={cn(
                "text-sm leading-[21px] text-white hover:text-prim transition-colors",
                className
            )}
        >
            {children}
        </Link>
    );
}
