"use client";

import { cn } from "@/lib/utils";

import { useAuthNavigate } from "@/contexts/auth-navigate-context";

import { UiHeader } from "@/components/uikit/ui-header";
import { Logo } from "@/components/logo";
import { UiLink } from "@/components/uikit/ui-link";
import { Button } from "@/components/ui/button";
import { UiMenuIcon } from "@/components/uikit/icons/ui-menu-icon";
import { UiCrossIcon } from "@/components/uikit/icons/ui-cross-icon";
import { AuthNavigate } from "@/components/auth/auth-navigate";

export function Navigate({ isAuth }) {
    const {
        verifiedToken,
        resetToken,
        isActiveMobMenu,
        typeForm,
        isOpen,
        onOpenMenu,
        onCloseMenu,
        onOpenModal,
        onCloseModal,
    } = useAuthNavigate();

    return (
        <UiHeader
            className={cn(
                `
                    w-full flex items-center
                    absolute top-0 left-0 z-10
                `,
                isActiveMobMenu && `h-screen`
            )}
        >
            <NavigateContainer
                logo={<Logo onClick={onCloseMenu} />}
                links={
                    <NavigateLinks isActive={isActiveMobMenu}>
                        <UiLink
                            href="#"
                            className={isActiveMobMenu && "text-2xl"}
                            onClick={onCloseMenu}
                        >
                            Преимущества
                        </UiLink>
                        <UiLink
                            href="#"
                            className={isActiveMobMenu && "text-2xl"}
                            onClick={onCloseMenu}
                        >
                            Как это работает?
                        </UiLink>
                        <UiLink
                            href="/about-app"
                            className={isActiveMobMenu && "text-2xl"}
                            onClick={onCloseMenu}
                        >
                            О приложении
                        </UiLink>
                    </NavigateLinks>
                }
                auth={
                    <AuthLinks isActive={isActiveMobMenu}>
                        <AuthNavigate
                            verifiedToken={verifiedToken}
                            resetToken={resetToken}
                            isAuth={isAuth}
                            isActive={isActiveMobMenu}
                            typeForm={typeForm}
                            isOpen={isOpen}
                            onOpenModal={onOpenModal}
                            onCloseModal={onCloseModal}
                            onCloseMenu={onCloseMenu}
                        />
                    </AuthLinks>
                }
                menu={
                    <MenuButton
                        isActive={isActiveMobMenu}
                        onClick={onOpenMenu}
                    />
                }
                className={cn("", isActiveMobMenu && `h-screen items-start `)}
            />
        </UiHeader>
    );
}

function NavigateContainer({ className, logo, links, auth, menu }) {
    return (
        <nav
            className={cn("container relative bg-background-second", className)}
        >
            <div className="flex items-center justify-between py-3">
                {logo}
                {links}
                {auth}
                {menu}
            </div>
        </nav>
    );
}

function NavigateLinks({ isActive, children }) {
    return (
        <div
            className={cn(
                `
                    hidden md:flex text-start gap-4
                `,
                isActive && "flex flex-col absolute top-[84px]"
            )}
        >
            {children}
        </div>
    );
}

function AuthLinks({ isActive, children }) {
    return (
        <div
            className={cn(
                `
                    hidden md:flex text-start gap-8
                `,
                isActive && "flex flex-col gap-6 absolute bottom-14"
            )}
        >
            {children}
        </div>
    );
}

function MenuButton({ isActive, onClick }) {
    return (
        <Button
            type="button"
            onClick={onClick}
            className={`
                    md:hidden
                    px-0 py-0 h-6 w-6 
                    text-white hover:text-prim-hover 
                    bg-transparent hover:bg-transparent
                    active:bg-transparent
            `}
        >
            {isActive ? <UiCrossIcon /> : <UiMenuIcon />}
        </Button>
    );
}
