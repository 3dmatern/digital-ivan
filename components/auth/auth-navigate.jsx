import { cn } from "@/lib/utils";
import { logout } from "@/actions/logout";

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
}) {
    const handleLogout = (e) => {
        e.preventDefault();
        onCloseMenu();
        logout();
    };

    const getContentModal = () => {
        switch (typeForm) {
            case "register":
                return <RegisterForm />;
            case "login":
                return <LoginForm onCloseModal={onCloseModal} />;
            case "verified":
                return <NewVerificationForm verifiedToken={verifiedToken} />;
            case "reset-password":
                return <ResetForm />;
            case "new-password":
                return <NewPasswordForm resetToken={resetToken} />;
            default:
                return;
        }
    };

    return (
        <>
            <UiModal isOpen={isOpen} onClose={() => onCloseModal()}>
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
                        onClick={handleLogout}
                    >
                        Выйти
                    </UiLink>
                </>
            ) : (
                <>
                    <UiLink
                        href="/?auth=register"
                        className={cn("font-bold", isActive && "text-2xl")}
                        onClick={() => {
                            onCloseMenu();
                            onOpenModal("register");
                        }}
                    >
                        Регистрация
                    </UiLink>
                    <UiLink
                        href="/?auth=login"
                        className={cn("font-bold", isActive && "text-2xl")}
                        onClick={() => {
                            onCloseMenu();
                            onOpenModal("login");
                        }}
                    >
                        Вход
                    </UiLink>
                </>
            )}
        </>
    );
}
