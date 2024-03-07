"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { CurrentUserProvider } from "@/contexts/current-user-context";
import localStorageService from "@/services/local-storage-service";

export default function ProtectedLayout({ children }) {
    const currentUser = localStorageService.getUser();
    const router = useRouter();

    useEffect(() => {
        if (!currentUser) {
            router.push("/");
        }
    }, [currentUser, router]);

    return (
        <CurrentUserProvider currentUser={currentUser}>
            {children}
        </CurrentUserProvider>
    );
}
