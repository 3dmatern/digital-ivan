"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { register } from "@/actions/register";
import { RegisterSchema } from "@/schemas";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { FormSuccess } from "@/components/auth/form-success";
import { FormError } from "@/components/auth/form-error";
import { InputField } from "@/components/auth/ui/input-field";

export function RegisterForm({ onSwitchModal }) {
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [isPending, startTransition] = useTransition();
    const form = useForm({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: "",
            nickname: "",
            password: "",
        },
    });

    const onSubmit = (values) => {
        setSuccess("");
        setError("");

        startTransition(() => {
            register(values)
                .then((data) => {
                    setError(data.error);
                    setSuccess(data.success);
                })
                .catch(() => setError("Что-то пошло не так!"));
        });
    };

    return (
        <CardWrapper
            headerLabel="Регистрация"
            backButtonLabel="Уже есть аккаунт?"
            onClickBackButton={() => onSwitchModal("login")}
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
                        error={error}
                    />

                    <InputField
                        form={form}
                        name="nickname"
                        label="Введите имя пользователя"
                        type="text"
                        isPending={isPending}
                        error={error}
                    />

                    <InputField
                        form={form}
                        name="password"
                        label="Введите пароль"
                        type="password"
                        isPending={isPending}
                        error={error}
                    />

                    <FormSuccess message={success} />
                    <FormError message={error} />
                    <Button
                        type="submit"
                        disabled={isPending}
                        className="w-full"
                    >
                        Создать аккаунт
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    );
}
