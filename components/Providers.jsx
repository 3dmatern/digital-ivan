"use client";

import { SessionProvider } from "next-auth/react";

import { AuthNavigateContextProvider } from "@/contexts/auth-navigate-context";

export const Providers = ({ children }) => {
    return (
        <SessionProvider>
            <AuthNavigateContextProvider>
                {children}
            </AuthNavigateContextProvider>
        </SessionProvider>
    );
};
