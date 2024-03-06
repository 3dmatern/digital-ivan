"use client";

import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { BeatLoader } from "react-spinners";

import { useAuthNavigate } from "@/hooks/use-auth-navigate";

import { newVerification } from "@/actions/new-verification";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { FormSuccess } from "@/components/auth/form-success";
import { FormError } from "@/components/auth/form-error";

export function NewVerificationForm() {
    const searchParams = useSearchParams();
    const verifiedToken = searchParams.get("verified");
    const { onOpenModal, onSwitchModal, onCloseModal } = useAuthNavigate();

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    useEffect(() => {
        if (verifiedToken) {
            onOpenModal("verified");
        }
    }, [onOpenModal, verifiedToken]);

    const onSubmit = useCallback(() => {
        if (success || error) return;

        if (!verifiedToken) {
            setError("Отсутствует токен!");
            return;
        }

        newVerification(verifiedToken)
            .then((data) => {
                setSuccess(data.success);
                setError(data.error);
            })
            .catch(() => {
                setError("Что-то пошло не так!");
            });
    }, [error, success, verifiedToken]);

    useEffect(() => {
        onSubmit();
    }, [onSubmit]);

    return (
        <CardWrapper
            headerLabel="Подтверждение Email"
            backButtonLabel="Вход"
            onClickBackButton={() => onSwitchModal("login")}
            onCloseModal={onCloseModal}
        >
            <div className="flex items-center justify-center w-full">
                {!success && !error && <BeatLoader />}
                <FormSuccess message={success} />
                {!success && <FormError message={error} />}
            </div>
        </CardWrapper>
    );
}
