"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export function useAuthNavigate() {
    const searchParams = useSearchParams();
    const verifiedToken = searchParams.get("verified");
    const resetToken = searchParams.get("reset");

    const [isActive, setIsActive] = useState(false);
    const [isModal, setIsModal] = useState({
        isOpen: false,
        typeForm: "",
    });

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
        setIsActive((prev) => !prev);
    };

    const handleCloseMenu = () => {
        setIsActive((prev) => false);
    };

    const handleOpenModal = (type) => {
        setIsModal((prev) => ({ ...prev, isOpen: true, typeForm: type }));
    };

    const handleSwitchModal = (type) => {
        setIsModal((prev) => ({ ...prev, isOpen: true, typeForm: type }));
    };

    const handleCloseModal = () => {
        setIsModal((prev) => ({
            ...prev,
            isOpen: false,
            typeForm: "",
        }));
    };

    return {
        verifiedToken,
        resetToken,
        isAuth: false,
        isActive,
        typeForm: isModal.typeForm,
        isOpen: isModal.isOpen,
        onOpenMenu: handleOpenMenu,
        onCloseMenu: handleCloseMenu,
        onOpenModal: handleOpenModal,
        onSwitchModal: handleSwitchModal,
        onCloseModal: handleCloseModal,
    };
}
