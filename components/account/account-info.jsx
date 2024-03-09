"use client";

import { useState, useTransition } from "react";
import Link from "next/link";

import { subscribeExtend } from "@/actions/subscribe";
import { useAuth } from "@/contexts/auth-context";

import { Button } from "@/components/ui/button";
import { UiHeadingFourth } from "@/components/uikit/heading";
import { UiDivContainer } from "@/components/uikit/ui-div-container";
import { UiSectionWrapper } from "@/components/uikit/ui-section-wrapper";
import { UiLink } from "@/components/uikit/ui-link";
import { UiDivider } from "@/components/uikit/ui-divider";
import localStorageService from "@/services/local-storage-service";
import { FormSuccess } from "@/components/auth/form-success";
import { FormError } from "@/components/auth/form-error";

export function AccountInfo() {
    const { user, setUser } = useAuth();
    const [isPending, startTransition] = useTransition();
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const handleSubscribeExtend = () => {
        setSuccess("");
        setError("");

        startTransition(async () => {
            const accessToken = localStorageService.getAccessToken();
            const data = await subscribeExtend(accessToken);

            if (data?.error) {
                setError(data.error);
            }

            if (data?.success) {
                setSuccess(data.success);
                localStorageService.setSubscriptionEnd("2024-04-10");
                setUser((prev) => ({ ...prev, subscriptionEnd: "2024-04-10" }));
            }
        });
    };

    return (
        <UiSectionWrapper className="bg-background-first">
            <UiDivContainer className="pt-6 pb-14 lg:pt-10 lg:pb-[158px]">
                <AccountInfoBody>
                    <AccountInfoUser
                        username={user?.username}
                        subscriptionEnd={user?.subscriptionEnd}
                        isPending={isPending}
                        onSubscribeExtend={handleSubscribeExtend}
                        success={success}
                        error={error}
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
    success,
    error,
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

            <FormSuccess message={success} />
            <FormError message={error} />
            <Button
                type="button"
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
