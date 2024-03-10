"use client";

import { AuthNavigateProvider } from "@/contexts/auth-navigate-context";

export const Providers = ({ children }) => {
    return <AuthNavigateProvider>{children}</AuthNavigateProvider>;
};
