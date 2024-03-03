"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

import { UiHeader } from "@/components/uikit/ui-header";
import { Logo } from "@/components/logo";
import { UiLink } from "@/components/uikit/ui-link";
import { Button } from "@/components/ui/button";
import { UiMenuIcon } from "@/components/uikit/icons/ui-menu-icon";
import { UiCrossIcon } from "@/components/uikit/icons/ui-cross-icon";

export function Navigate() {
    const [isActive, setIsActive] = useState(false);

    const handleOpenMenu = () => {
        setIsActive((prev) => !prev);
    };

    return (
        <UiHeader
            className={cn(
                `
                    w-full flex items-center
                    absolute top-0 left-0
                `,
                isActive && `h-screen`
            )}
        >
            <NavigateContainer
                logo={<Logo text="niko" />}
                links={
                    <NavigateLinks isActive={isActive}>
                        <UiLink href="#" className={isActive && "text-2xl"}>
                            Преимущества
                        </UiLink>
                        <UiLink href="#" className={isActive && "text-2xl"}>
                            Как это работает?
                        </UiLink>
                        <UiLink href="#" className={isActive && "text-2xl"}>
                            О приложении
                        </UiLink>
                    </NavigateLinks>
                }
                auth={
                    <AuthLinks isActive={isActive}>
                        <UiLink
                            href="#"
                            className={cn("font-bold", isActive && "text-2xl")}
                        >
                            Регистрация
                        </UiLink>
                        <UiLink
                            href="#"
                            className={cn("font-bold", isActive && "text-2xl")}
                        >
                            Вход
                        </UiLink>
                    </AuthLinks>
                }
                menu={
                    <MenuButton isActive={isActive} onClick={handleOpenMenu} />
                }
                className={cn("", isActive && `h-screen items-start `)}
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
