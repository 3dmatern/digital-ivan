import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";

import logoImage from "@/public/niko.svg";

export function Logo({ className, ...rest }) {
    return (
        <Link
            {...rest}
            href="/"
            className={cn("flex items-center justify-center h-9", className)}
        >
            <Image src={logoImage} alt="NIKO" />
        </Link>
    );
}
