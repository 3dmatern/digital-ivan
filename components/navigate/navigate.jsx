import Link from "next/link";
import { Comfortaa } from "next/font/google";

import { cn } from "@/lib/utils";

import { UiHeader } from "@/components/uikit/ui-header";
import { UiLink } from "@/components/uikit/ui-link";

const comfortaa = Comfortaa({
    weight: "700",
    subsets: ["latin"],
    display: "swap",
});

export function Navigate() {
    return (
        <UiHeader className="w-full flex items-center py-3 px-2 bg-almost-black">
            <NavigateContainer
                logo={
                    <UiLink
                        href="/"
                        className={cn(
                            "text-2xl uppercase font-bold text-prim tracking-[10%]",
                            comfortaa.className
                        )}
                    >
                        niko
                    </UiLink>
                }
                links={
                    <>
                        <UiLink href="#">Преимущества</UiLink>
                        <UiLink href="#">Как это работает?</UiLink>
                        <UiLink href="#">О приложении</UiLink>
                    </>
                }
                auth={
                    <>
                        <UiLink href="#" className="font-bold">
                            Регистрация
                        </UiLink>
                        <UiLink href="#" className="font-bold">
                            Вход
                        </UiLink>
                    </>
                }
            />
        </UiHeader>
    );
}

function NavigateContainer({ logo, links, auth }) {
    return (
        <nav className="container flex items-center justify-between">
            <div>{logo}</div>
            <div className="flex items-center gap-8">{links}</div>
            <div className="flex items-center gap-8">{auth}</div>
        </nav>
    );
}
