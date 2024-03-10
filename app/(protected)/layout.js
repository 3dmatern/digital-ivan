"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useAuth } from "@/contexts/auth-context";

export default function ProtectedLayout({ children }) {
    const router = useRouter();
    const { isAuth } = useAuth();

    useEffect(() => {
        if (!isAuth) {
            router.push("/?auth=login");
            return;
        }
    }, [router, isAuth]);

    return children;
}
