"use client";

import { cn } from "@/lib/utils";

import { UiLink } from "@/components/uikit/ui-link";
import { UiModal } from "@/components/uikit/ui-modal";
import { RegisterForm } from "@/components/auth/register-form";
import { LoginForm } from "@/components/auth/login-form";
import { NewVerificationForm } from "@/components/auth/new-verification-form";
import { ResetForm } from "@/components/auth/reset-form";
import { NewPasswordForm } from "@/components/auth/new-password-form";

export function AuthNavigate({
    verifiedToken,
    resetToken,
    isAuth,
    isActive,
    typeForm,
    isOpen,
    onOpenModal,
    onCloseModal,
    onCloseMenu,
    onLogout,
}) {
    const getContentModal = () => {
        switch (typeForm) {
            case "register":
                return (
                    <RegisterForm
                        onClickBackButton={onOpenModal}
                        onCloseModal={onCloseModal}
                    />
                );
            case "login":
                return (
                    <LoginForm
                        onClickBackButton={onOpenModal}
                        onCloseModal={onCloseModal}
                    />
                );
            case "verified":
                return (
                    <NewVerificationForm
                        verifiedToken={verifiedToken}
                        onClickBackButton={onOpenModal}
                        onCloseModal={onCloseModal}
                    />
                );
            case "reset-password":
                return (
                    <ResetForm
                        onClickBackButton={onOpenModal}
                        onCloseModal={onCloseModal}
                    />
                );
            case "new-password":
                return (
                    <NewPasswordForm
                        resetToken={resetToken}
                        onClickBackButton={onOpenModal}
                        onCloseModal={onCloseModal}
                    />
                );
            default:
                return;
        }
    };

    return (
        <>
            <UiModal isOpen={isOpen} onClose={onCloseModal}>
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
                        href="#"
                        className={cn("font-bold", isActive && "text-2xl")}
                        onClick={(e) => {
                            e.preventDefault();
                            onCloseMenu();
                            onLogout();
                        }}
                    >
                        Выйти
                    </UiLink>
                </>
            ) : (
                <>
                    <UiLink
                        href="#"
                        className={cn("font-bold", isActive && "text-2xl")}
                        onClick={(e) => {
                            e.preventDefault();
                            onOpenModal("register");
                            onCloseMenu();
                        }}
                    >
                        Регистрация
                    </UiLink>
                    <UiLink
                        href="#"
                        className={cn("font-bold", isActive && "text-2xl")}
                        onClick={(e) => {
                            e.preventDefault();
                            onOpenModal("login");
                            onCloseMenu();
                        }}
                    >
                        Вход
                    </UiLink>
                </>
            )}
        </>
    );
}
