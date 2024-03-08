"use client";

import { createContext, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export const AuthNavigateContext = createContext();

export function AuthNavigateContextProvider({ children }) {
    const searchParams = useSearchParams();
    const authParam = searchParams.get("auth");
    const verifiedToken = searchParams.get("verified");
    const resetToken = searchParams.get("reset");

    const [isActiveMobMenu, setIsActiveMobMenu] = useState(false);
    const [isModal, setIsModal] = useState({
        isOpen: false,
        typeForm: null,
    });

    useEffect(() => {
        if (authParam) {
            setIsModal((prev) => ({
                ...prev,
                isOpen: true,
                typeForm: authParam,
            }));
        }
    }, [authParam]);

    useEffect(() => {
        if (verifiedToken) {
            setIsModal((prev) => ({
                ...prev,
                isOpen: true,
                typeForm: "verified",
            }));
        }
        if (resetToken) {
            setIsModal((prev) => ({
                ...prev,
                isOpen: true,
                typeForm: "reset",
            }));
        }
    }, [resetToken, verifiedToken]);

    const handleOpenMenu = () => {
        setIsActiveMobMenu((prev) => !prev);
    };

    const handleCloseMenu = () => {
        setIsActiveMobMenu((prev) => false);
    };

    const handleOpenModal = (type) => {
        setIsModal((prev) => ({ ...prev, isOpen: true, typeForm: type }));
    };

    const handleCloseModal = () => {
        setIsModal((prev) => ({ ...prev, isOpen: false, typeForm: null }));
    };

    return (
        <AuthNavigateContext.Provider
            value={{
                verifiedToken,
                resetToken,
                isActiveMobMenu,
                typeForm: isModal.typeForm,
                isOpen: isModal.isOpen,
                onOpenMenu: handleOpenMenu,
                onCloseMenu: handleCloseMenu,
                onOpenModal: handleOpenModal,
                onCloseModal: handleCloseModal,
            }}
        >
            {children}
        </AuthNavigateContext.Provider>
    );
}
