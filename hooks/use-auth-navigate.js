"use client";

import { useEffect, useState } from "react";

export function useAuthNavigate({ verifiedToken, resetToken }) {
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
    }, [verifiedToken, resetToken]);

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
