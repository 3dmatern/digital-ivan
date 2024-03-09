"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import localStorageService from "@/services/local-storage-service";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const router = useRouter();
    const [user, setUser] = useState(null);

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

        setUser({
            username,
            subscriptionEnd,
        });
    }, [router]);

    const handleLogout = () => {
        localStorageService.removeAuthData();
        router.push("/");
        return;
    };

    return (
        <AuthContext.Provider value={{ user, setUser, onLogout: handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
