"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const AuthNavigateContext = createContext();

export function AuthNavigateProvider({ children }) {
    const router = useRouter();
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
        if (verifiedToken) {
            setIsModal((prev) => ({
                ...prev,
                isOpen: true,
                typeForm: "verified",
            }));
        } else if (resetToken) {
            setIsModal((prev) => ({
                ...prev,
                isOpen: true,
                typeForm: "new-password",
            }));
        } else if (authParam) {
            setIsModal((prev) => ({
                ...prev,
                isOpen: true,
                typeForm: authParam,
            }));
        } else {
            setIsModal((prev) => ({
                ...prev,
                isOpen: false,
                typeForm: null,
            }));
        }
    }, [authParam, resetToken, verifiedToken]);

    const handleOpenMenu = () => {
        setIsActiveMobMenu((prev) => !prev);
    };

    const handleCloseMenu = () => {
        setIsActiveMobMenu((prev) => false);
    };

    const handleOpenModal = (type) => {
        setIsModal((prev) => ({ ...prev, isOpen: true, typeForm: type }));
    };

    const handleCloseModal = (isBackRoute = true) => {
        if (isBackRoute) {
            router.back();
        }
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

export const useAuthNavigate = () => useContext(AuthNavigateContext);
