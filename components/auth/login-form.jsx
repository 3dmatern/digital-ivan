"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import ReCAPTCHA from "react-google-recaptcha";

import { LoginSchema } from "@/schemas";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { FormError } from "@/components/auth/form-error";
import { InputField } from "@/components/auth/ui/input-field";

import { login } from "@/actions/login";

export function LoginForm({ onClickBackButton, onCloseModal }) {
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
                    onCloseModal();
                    // router.push("/account");
                }
            });
        }
    };

    return (
        <CardWrapper
            headerLabel="Вход"
            backButtonLabel="Ещё нет аккаунта?"
            onClickBackButton={() => onClickBackButton("register")}
            onCloseModal={onCloseModal}
        >
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4"
                >
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
                        placeholder="******"
                        forgotPassword={
                            <Button
                                size="sm"
                                variant="link"
                                onClick={() =>
                                    onClickBackButton("resetPassword")
                                }
                                className="px-0 font-normal"
                            >
                                Забыли пароль?
                            </Button>
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
