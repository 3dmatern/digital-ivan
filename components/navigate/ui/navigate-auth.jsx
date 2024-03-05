import { cn } from "@/lib/utils";

import { UiLink } from "@/components/uikit/ui-link";

export function NavigateAuth({ isAuth, isActive, onClick }) {
    return isAuth ? (
        <>
            <UiLink
                href="/account"
                className={cn("font-bold", isActive && "text-2xl")}
                onClick={onClick}
            >
                Личный кабинет
            </UiLink>
            <UiLink
                href="/"
                className={cn("font-bold", isActive && "text-2xl")}
                onClick={onClick}
            >
                Выйти
            </UiLink>
        </>
    ) : (
        <>
            <UiLink
                href="#"
                className={cn("font-bold", isActive && "text-2xl")}
                onClick={onClick}
            >
                Регистрация
            </UiLink>
            <UiLink
                href="#"
                className={cn("font-bold", isActive && "text-2xl")}
                onClick={onClick}
            >
                Вход
            </UiLink>
        </>
    );
}
