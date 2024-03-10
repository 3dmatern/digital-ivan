"use client";

import { useCallback, useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";

import { newVerification } from "@/actions/new-verification";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { FormSuccess } from "@/components/auth/form-success";
import { FormError } from "@/components/auth/form-error";

export function NewVerificationForm({ verifiedToken }) {
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

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
            backButtonHref="/?auth=login"
        >
            <div className="flex items-center justify-center w-full">
                {!success && !error && <BeatLoader />}
                <FormSuccess message={success} />
                {!success && <FormError message={error} />}
            </div>
        </CardWrapper>
    );
}
