"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { cn } from "@/lib/utils";

import { UiLink } from "@/components/uikit/ui-link";
import { UiModal } from "@/components/uikit/ui-modal";
import { RegisterForm } from "@/components/auth/register-form";
import { LoginForm } from "@/components/auth/login-form";
import { NewVerificationForm } from "../auth/new-verification-form";

export function NavigateAuth({ isAuth, isActive, onCloseMenu }) {
    const searchParams = useSearchParams();
    const token = searchParams.get("token");

    const [isModal, setIsModal] = useState({
        isOpen: false,
        typeForm: "",
    });

    useEffect(() => {
        if (token) {
            setIsModal((prev) => ({
                ...prev,
                isOpen: true,
                typeForm: "verified",
            }));
        }
    }, [token]);

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
            typeForm: "",
        }));
    };

    const getContentModal = () => {
        switch (isModal.typeForm) {
            case "register":
                return (
                    <RegisterForm
                        onSwitchModal={handleSwitchModal}
                        onCloseModal={handleCloseModal}
                    />
                );
            case "login":
                return (
                    <LoginForm
                        onSwitchModal={handleSwitchModal}
                        onCloseModal={handleCloseModal}
                    />
                );
            case "verified":
                return (
                    <NewVerificationForm
                        token={token}
                        onSwitchModal={handleSwitchModal}
                        onCloseModal={handleCloseModal}
                    />
                );
            default:
                return;
        }
    };

    return (
        <>
            <UiModal isOpen={isModal.isOpen} onClose={handleCloseModal}>
                {getContentModal()}
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
