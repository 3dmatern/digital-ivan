"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import ReCAPTCHA from "react-google-recaptcha";

import { useAuth } from "@/contexts/auth-context";
import { LoginSchema } from "@/schemas";
import { login } from "@/actions/login";
import localStorageService from "@/services/local-storage-service";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { FormError } from "@/components/auth/form-error";
import { FormSuccess } from "@/components/auth/form-success";
import { InputField } from "@/components/auth/ui/input-field";

export function LoginForm({ onClickBackButton, onCloseModal }) {
    const router = useRouter();
    const { setUser } = useAuth();

    const [captcha, setCaptcha] = useState(undefined);
    const [success, setSuccess] = useState("");
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
            setSuccess("");
            setError("");

            startTransition(async () => {
                const data = await login(values);

                if (data?.error) {
                    setError(data.error);
                    return;
                }

                if (data?.success) {
                    setSuccess(data?.success);
                    setUser({
                        username: data.username,
                        subscriptionEnd: data.subscriptionEnd,
                    });
                    localStorageService.setTokens({
                        username: data.username,
                        subscriptionEnd: data.subscriptionEnd,
                        accessToken: data.accessToken,
                        expiresIn: data.expiresIn,
                    });
                    form.resetField("username");
                    form.resetField("password");

                    onCloseModal();

                    router.push("/account");
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
                        Войти
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    );
}
