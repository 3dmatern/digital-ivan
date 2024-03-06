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
    isAuth,
    isActive,
    typeForm,
    isOpen,
    onOpenModal,
    onSwitchModal,
    onCloseModal,
    onCloseMenu,
}) {
    const getContentModal = () => {
        switch (typeForm) {
            case "register":
                return (
                    <RegisterForm
                        onClickBackButton={onSwitchModal}
                        onCloseModal={onCloseModal}
                    />
                );
            case "login":
                return (
                    <LoginForm
                        onClickBackButton={onSwitchModal}
                        onCloseModal={onCloseModal}
                    />
                );
            case "verified":
                return (
                    <NewVerificationForm
                        verifiedToken={verifiedToken}
                        onClickBackButton={onSwitchModal}
                        onCloseModal={onCloseModal}
                    />
                );
            case "resetPassword":
                return (
                    <ResetForm
                        onClickBackButton={onSwitchModal}
                        onCloseModal={onCloseModal}
                    />
                );
            case "reset":
                return (
                    <NewPasswordForm
                        resetToken={resetToken}
                        onClickBackButton={onSwitchModal}
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
                        onClick={() => {
                            onOpenModal("register");
                            onCloseMenu();
                        }}
                    >
                        Регистрация
                    </UiLink>
                    <UiLink
                        href="#"
                        className={cn("font-bold", isActive && "text-2xl")}
                        onClick={() => {
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