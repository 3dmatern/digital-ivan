"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

export function BackButton({ href, label, onClick }) {
    return (
        <Button
            variant="link"
            className="font-normal w-full"
            size="sm"
            onClick={onClick}
            asChild
        >
            <Link href={href}>{label}</Link>
        </Button>
    );
}
