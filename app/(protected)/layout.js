"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useAuth } from "@/contexts/auth-context";
import localStorageService from "@/services/local-storage-service";

export default function ProtectedLayout({ children }) {
    const router = useRouter();
    const { onSetUser } = useAuth();

    useEffect(() => {
        const accessToken = localStorageService.getAccessToken();
        const username = localStorageService.getUsername();
        const subscriptionEnd = localStorageService.getSubscriptionEnd();

        const isToken = !accessToken || accessToken === "undefined";
        const isUsername = !username || username === "undefined";
        const isSubscription =
            !subscriptionEnd || subscriptionEnd === "undefined";

        if (isToken || isUsername || isSubscription) {
            router.push("/?auth=login");
            return;
        }

        onSetUser({
            username,
            subscriptionEnd,
        });
    }, [router, onSetUser]);

    return children;
}
