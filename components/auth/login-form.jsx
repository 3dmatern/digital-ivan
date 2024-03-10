"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ReCAPTCHA from "react-google-recaptcha";
import { useRouter } from "next/navigation";

import { LoginSchema } from "@/schemas";
import { login } from "@/actions/login";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { FormError } from "@/components/auth/form-error";
import { InputField } from "@/components/auth/ui/input-field";
import { BackButton } from "./ui/back-button";

export function LoginForm({ onCloseModal }) {
    const router = useRouter();

    const [captcha, setCaptcha] = useState(undefined);
    const [error, setError] = useState("");
    const [isPending, startTransition] = useTransition();

    const form = useForm({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    });

    const onSubmit = (values) => {
        if (captcha) {
            setError("");

            startTransition(async () => {
                const data = await login(values);

                if (data?.error) {
                    setError(data.error);
                    return;
                }

                if (data?.success) {
                    form.resetField("username");
                    form.resetField("password");

                    onCloseModal(false);

                    router.push(DEFAULT_LOGIN_REDIRECT);
                }
            });
        }
    };

    return (
        <CardWrapper
            headerLabel="Вход"
            backButtonLabel="Ещё нет аккаунта?"
            backButtonHref="/?auth=register"
        >
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4"
                >
                    <InputField
                        form={form}
                        name="username"
                        label="Имя пользователя"
                        type="text"
                        isPending={isPending}
                        error={form.formState.errors["username"]}
                    />

                    <InputField
                        form={form}
                        name="password"
                        label="Пароль"
                        type="password"
                        isPending={isPending}
                        placeholder="******"
                        forgotPassword={
                            <BackButton
                                href="/?auth=reset-password"
                                label="Забыли пароль?"
                            />
                        }
                        error={form.formState.errors["password"]}
                    />
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
                        Войти
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    );
}
