"use client";

import { useSearchParams } from "next/navigation";
import { createContext } from "react";

import { useAuthNavigate } from "@/hooks/use-auth-navigate";

export const ProvidersContext = createContext();

export function Providers({ children }) {
    const searchParams = useSearchParams();
    const verifiedToken = searchParams.get("verified");
    const resetToken = searchParams.get("reset");
    const {
        isActive,
        typeForm,
        isOpen,
        onOpenModal,
        onSwitchModal,
        onCloseModal,
        onOpenMenu,
        onCloseMenu,
    } = useAuthNavigate({ verifiedToken, resetToken });

    return (
        <ProvidersContext.Provider
            value={{
                isAuth: false,
                verifiedToken,
                resetToken,
                isActive,
                typeForm,
                isOpen,
                onOpenModal,
                onSwitchModal,
                onCloseModal,
                onOpenMenu,
                onCloseMenu,
            }}
        >
            {children}
        </ProvidersContext.Provider>
    );
}
