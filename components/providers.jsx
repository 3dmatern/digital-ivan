"use client";

import { AuthProvider } from "@/contexts/auth-context";

export const Providers = ({ children }) => {
    return <AuthProvider>{children}</AuthProvider>;
};
