"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

export function BackButton({ href, label, className }) {
    return (
        <Button
            variant="link"
            className={cn("font-normal w-full", className)}
            size="sm"
            asChild
        >
            <Link href={href}>{label}</Link>
        </Button>
    );
}
