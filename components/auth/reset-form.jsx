"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ReCAPTCHA from "react-google-recaptcha";

import { reset } from "@/actions/reset";

import { ResetSchema } from "@/schemas";
import { Form } from "@/components/ui/form";
import { InputField } from "@/components/auth/ui/input-field";
import { Button } from "@/components/ui/button";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { FormSuccess } from "@/components/auth/form-success";
import { FormError } from "@/components/auth/form-error";

export function ResetForm({ onClickBackButton, onCloseModal }) {
    const [captcha, setCaptcha] = useState(undefined);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [isPending, startTransition] = useTransition();
    const form = useForm({
        resolver: zodResolver(ResetSchema),
        defaultValues: {
            email: "",
        },
    });

    const onSubmit = (values) => {
        if (captcha) {
            setSuccess("");
            setError("");

            startTransition(() => {
                reset(values).then((data) => {
                    setError(data.error);
                    setSuccess(data.success);
                });
            });
        }
    };

    return (
        <CardWrapper
            headerLabel="Забыли свой пароль?"
            backButtonLabel="Вход"
            onClickBackButton={() => onClickBackButton("login")}
            onCloseModal={onCloseModal}
        >
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4"
                >
                    <InputField
                        form={form}
                        name="email"
                        label="Введите почту"
                        type="email"
                        isPending={isPending}
                        placeholder="jhon.doe@example.com"
                        error={form.formState.errors["email"]}
                    />

                    <FormSuccess message={success} />
                    <FormError message={error} />
                    <ReCAPTCHA
                        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                        onChange={setCaptcha}
                        className="flex items-center justify-center"
                    />
                    <Button
                        type="submit"
                        disabled={isPending}
                        className="w-full"
                    >
                        Сбросить пароль
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    );
}
