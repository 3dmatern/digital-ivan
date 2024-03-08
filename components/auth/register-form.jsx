"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ReCAPTCHA from "react-google-recaptcha";

import { register } from "@/actions/register";
import { RegisterSchema } from "@/schemas";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { FormSuccess } from "@/components/auth/form-success";
import { FormError } from "@/components/auth/form-error";
import { InputField } from "@/components/auth/ui/input-field";

export function RegisterForm({ onClickBackButton, onCloseModal }) {
    const [captcha, setCaptcha] = useState(undefined);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [isPending, startTransition] = useTransition();
    const form = useForm({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: "",
            username: "",
            password: "",
            confirmPassword: "",
        },
    });

    const onSubmit = (values) => {
        if (captcha) {
            setSuccess("");
            setError("");

            startTransition(async () => {
                const data = await register(values);

                if (data?.error) {
                    setError(data.error);
                }

                if (data?.success) {
                    setSuccess(data.success);
                    form.reset();
                }
            });
        }
    };

    return (
        <CardWrapper
            headerLabel="Регистрация"
            backButtonLabel="Уже есть аккаунт?"
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

                    <InputField
                        form={form}
                        name="username"
                        label="Введите имя пользователя"
                        type="text"
                        isPending={isPending}
                        error={form.formState.errors["username"]}
                    />

                    <InputField
                        form={form}
                        name="password"
                        label="Введите пароль"
                        type="password"
                        isPending={isPending}
                        error={form.formState.errors["password"]}
                    />

                    <InputField
                        form={form}
                        name="confirmPassword"
                        label="Подтвердите пароль"
                        type="password"
                        isPending={isPending}
                        error={form.formState.errors["confirmPassword"]}
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
                        Регистрация
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    );
}
