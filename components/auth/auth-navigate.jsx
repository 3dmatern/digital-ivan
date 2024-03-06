"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { cn } from "@/lib/utils";

import { UiLink } from "@/components/uikit/ui-link";
import { UiModal } from "@/components/uikit/ui-modal";
import { RegisterForm } from "@/components/auth/register-form";
import { LoginForm } from "@/components/auth/login-form";
import { NewVerificationForm } from "@/components/auth/new-verification-form";
import { ResetForm } from "@/components/auth/reset-form";
import { NewPasswordForm } from "./new-password-form";

export function AuthNavigate({ isAuth, isActive, onCloseMenu }) {
    const searchParams = useSearchParams();
    const verifiedToken = searchParams.get("verified");
    const resetToken = searchParams.get("reset");

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
                        onClickBackButton={handleSwitchModal}
                        onCloseModal={handleCloseModal}
                    />
                );
            case "login":
                return (
                    <LoginForm
                        onClickBackButton={handleSwitchModal}
                        onCloseModal={handleCloseModal}
                    />
                );
            case "verified":
                return (
                    <NewVerificationForm
                        verifiedToken={verifiedToken}
                        onClickBackButton={handleSwitchModal}
                        onCloseModal={handleCloseModal}
                    />
                );
            case "resetPassword":
                return (
                    <ResetForm
                        onClickBackButton={handleSwitchModal}
                        onCloseModal={handleCloseModal}
                    />
                );
            case "reset":
                return (
                    <NewPasswordForm
                        resetToken={resetToken}
                        onClickBackButton={handleSwitchModal}
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
