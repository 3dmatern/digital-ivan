"use client";

import { AuthProvider } from "@/contexts/auth-context";
import { AuthNavigateContextProvider } from "@/contexts/auth-navigate-context";

export const Providers = ({ children }) => {
    return (
        <AuthProvider>
            <AuthNavigateContextProvider>
                {children}
            </AuthNavigateContextProvider>
        </AuthProvider>
    );
};
