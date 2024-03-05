"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

import { UiLink } from "@/components/uikit/ui-link";
import { UiModal } from "@/components/uikit/ui-modal";
import { RegisterForm } from "@/components/auth/register-form";
import { LoginForm } from "@/components/auth/login-form";

export function NavigateAuth({ isAuth, isActive, onCloseMenu }) {
    const [isModal, setIsModal] = useState({
        isOpen: false,
        typeForm: "",
    });

    const handleOpenModal = (type) => {
        setIsModal((prev) => ({ ...prev, isOpen: true, typeForm: type }));
        onCloseMenu();
    };

    const handleSwitchModal = (type) => {
        setIsModal((prev) => ({ ...prev, isOpen: true, typeForm: type }));
    };

    const handleCloseModal = () => {
        setIsModal((prev) => ({
            ...prev,
            isOpen: false,
            typeForm: "register",
        }));
    };
    return (
        <>
            <UiModal isOpen={isModal.isOpen} onClose={handleCloseModal}>
                {isModal.typeForm === "register" ? (
                    <RegisterForm onSwitchModal={handleSwitchModal} />
                ) : (
                    <LoginForm onSwitchModal={handleSwitchModal} />
                )}
            </UiModal>

            {isAuth ? (
                <>
                    <UiLink
                        href="/account"
                        className={cn("font-bold", isActive && "text-2xl")}
                        onClick={onCloseMenu}
                    >
                        Личный кабинет
                    </UiLink>
                    <UiLink
                        href="/"
                        className={cn("font-bold", isActive && "text-2xl")}
                        onClick={onCloseMenu}
                    >
                        Выйти
                    </UiLink>
                </>
            ) : (
                <>
                    <UiLink
                        href="#"
                        className={cn("font-bold", isActive && "text-2xl")}
                        onClick={() => handleOpenModal("register")}
                    >
                        Регистрация
                    </UiLink>
                    <UiLink
                        href="#"
                        className={cn("font-bold", isActive && "text-2xl")}
                        onClick={() => handleOpenModal("login")}
                    >
                        Вход
                    </UiLink>
                </>
            )}
        </>
    );
}
