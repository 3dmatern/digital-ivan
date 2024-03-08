"use client";

import { useTransition } from "react";
import Link from "next/link";

import { subscribeExtend } from "@/actions/subscribe";

import { Button } from "@/components/ui/button";
import { UiHeadingFourth } from "@/components/uikit/heading";
import { UiDivContainer } from "@/components/uikit/ui-div-container";
import { UiSectionWrapper } from "@/components/uikit/ui-section-wrapper";
import { UiLink } from "@/components/uikit/ui-link";
import { UiDivider } from "@/components/uikit/ui-divider";

export function AccountInfo() {
    const [isPending, startTransition] = useTransition();

    const handleSubscribeExtend = () => {
        startTransition(() => {
            const data = subscribeExtend();

            if (data.error) {
                console.error(data.error);
            }

            if (data.success) {
                setSubscriptionEnd((prev) => data.success);
            }
        });
    };

    return (
        <UiSectionWrapper className="bg-background-first">
            <UiDivContainer className="pt-6 pb-14 lg:pt-10 lg:pb-[158px]">
                <AccountInfoBody>
                    <AccountInfoUser
                        username={username}
                        subscriptionEnd={subscriptionEnd}
                        isPending={isPending}
                        onSubscribeExtend={handleSubscribeExtend}
                    />
                    <UiDivider className="hidden md:block" />
                    <AccountInfoApp />
                </AccountInfoBody>
            </UiDivContainer>
        </UiSectionWrapper>
    );
}

function AccountInfoBody({ children }) {
    return (
        <div className="flex flex-col gap-14 md:flex-row lg:justify-around">
            {children}
        </div>
    );
}

function AccountInfoUser({
    username,
    subscriptionEnd,
    isPending,
    onSubscribeExtend,
}) {
    return (
        <div className=" flex flex-col gap-6 text-white">
            <div className="flex flex-col gap-2">
                <UiHeadingFourth>User: {username}</UiHeadingFourth>
                <p className="text-gray-third">
                    Дата окончания подписки:{" "}
                    <span className="text-prim">{subscriptionEnd}</span>
                </p>
            </div>

            <Button
                onClick={onSubscribeExtend}
                disabled={isPending}
                className="w-max"
            >
                Продлить подписку
            </Button>
        </div>
    );
}

function AccountInfoApp() {
    return (
        <div className="flex flex-col gap-6 text-white">
            <div className="flex flex-col gap-2">
                <UiHeadingFourth>Загрузка приложения</UiHeadingFourth>
                <p className="text-gray-third">
                    Перед использованием ознакомьтесь с краткой инструкцией на
                    странице{" "}
                    <UiLink
                        href="/about-app"
                        variant="reverse"
                        className="text-base"
                    >
                        “О приложении”
                    </UiLink>
                </p>
                <p className="text-gray-third">
                    Скачивая переводчик вы соглашаетесь с условиями договора
                    Лицензии-оферты,{" "}
                    <UiLink
                        href="/next.svg"
                        variant="reverse"
                        download={true}
                        target="_blank"
                        className="text-base"
                    >
                        скачать договор.
                    </UiLink>
                </p>
            </div>

            <Button asChild variant="outline" className="w-max">
                <Link href="/vercel.svg" target="_blank" download>
                    Скачать переводчик
                </Link>
            </Button>
        </div>
    );
}
