import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";

import logoImage from "@/public/niko.svg";

export function Logo({ className }) {
    return (
        <Link
            href="/"
            className={cn("flex items-center justify-center h-9", className)}
        >
            <Image src={logoImage} alt="NIKO" />
        </Link>
    );
}
