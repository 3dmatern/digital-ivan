"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { NewPasswordSchema } from "@/schemas";
import { newPassword } from "@/actions/new-password";

import { Form } from "@/components/ui/form";
import { InputField } from "@/components/auth/ui/input-field";
import { Button } from "@/components/ui/button";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { FormSuccess } from "@/components/auth/form-success";
import { FormError } from "@/components/auth/form-error";

export function NewPasswordForm({ resetToken }) {
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [isPending, startTransition] = useTransition();
    const form = useForm({
        resolver: zodResolver(NewPasswordSchema),
        defaultValues: {
            password: "",
            confirmPassword: "",
        },
    });

    const onSubmit = (values) => {
        setSuccess("");
        setError("");

        startTransition(() => {
            newPassword(values, resetToken).then((data) => {
                setError(data.error);
                setSuccess(data.success);
            });
        });
    };

    return (
        <CardWrapper
            headerLabel="Введите новый пароль"
            backButtonLabel="Вход"
            backButtonHref="/?auth=login"
        >
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                >
                    <InputField
                        form={form}
                        name="password"
                        label="Пароль"
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
                    <Button
                        type="submit"
                        disabled={isPending}
                        className="w-full"
                    >
                        Изменить пароль
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    );
}
