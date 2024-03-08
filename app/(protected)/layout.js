"use client";

import { CurrentUserProvider } from "@/contexts/current-user-context";
import localStorageService from "@/services/local-storage-service";

export default function ProtectedLayout({ children }) {
    const username = localStorageService.getUsername();
    const subscriptionEnd = localStorageService.getSubscriptionEnd();

    return (
        <CurrentUserProvider
            username={username}
            subscriptionEnd={subscriptionEnd}
        >
            {children}
        </CurrentUserProvider>
    );
}
