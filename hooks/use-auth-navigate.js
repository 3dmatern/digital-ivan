"use client";

import { useCallback, useState } from "react";

export function useAuthNavigate() {
    const [isActive, setIsActive] = useState(false);
    const [isModal, setIsModal] = useState({
        isOpen: false,
        typeForm: "",
    });

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
