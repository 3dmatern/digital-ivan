"use client";

import { createContext } from "react";

import { useAuthNavigate } from "@/hooks/use-auth-navigate";

export const ProvidersContext = createContext();

export function Providers({ children }) {
    const {
        isActive,
        typeForm,
        isOpen,
        onOpenModal,
        onSwitchModal,
        onCloseModal,
        onOpenMenu,
        onCloseMenu,
    } = useAuthNavigate();

    return (
        <ProvidersContext.Provider
            value={{
                isAuth: false,
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
