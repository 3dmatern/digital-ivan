"use client";

import { useAuth } from "@/contexts/auth-context";

export default function ProtectedLayout({ children }) {
    const { user } = useAuth();

    return children;
}
