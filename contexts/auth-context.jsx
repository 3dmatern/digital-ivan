"use client";

import { createContext, useCallback, useContext, useState } from "react";
import { useRouter } from "next/navigation";

import localStorageService from "@/services/local-storage-service";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const router = useRouter();
    const [user, setUser] = useState(null);

    const handleSetUser = useCallback((currentUser) => {
        setUser((prev) => ({ ...prev, ...currentUser }));
    }, []);

    const handleLogout = () => {
        localStorageService.removeAuthData();
        setUser(null);
        router.push("/");
        return;
    };

    return (
        <AuthContext.Provider
            value={{ user, onSetUser: handleSetUser, onLogout: handleLogout }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
