"use client";

import {
    Card,
    CardHeader,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import { BackButton } from "@/components/auth/ui/back-button";
import { UiHeadingThird } from "@/components/uikit/heading";

export function CardWrapper({
    children,
    headerLabel,
    backButtonLabel,
    onClickBackButton,
    onCloseModal,
}) {
    return (
        <Card className="max-w-96 w-full px-5 border-none rounded-none shadow-none">
            <CardHeader className="p-0 pb-8">
                <UiHeadingThird className="text-center text-[32px] leading-[41.6px] text-almost-black">
                    {headerLabel}
                </UiHeadingThird>
            </CardHeader>
            <CardContent className="p-0">{children}</CardContent>
            <CardFooter className="p-0 pt-4">
                <BackButton
                    href="/"
                    label="На главную"
                    onClick={onCloseModal}
                />
                <BackButton
                    href="/"
                    label={backButtonLabel}
                    onClick={onClickBackButton}
                />
            </CardFooter>
        </Card>
    );
}
