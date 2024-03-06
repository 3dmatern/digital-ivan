"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import ReCAPTCHA from "react-google-recaptcha";

import { LoginSchema } from "@/schemas";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { FormSuccess } from "@/components/auth/form-success";
import { FormError } from "@/components/auth/form-error";
import { login } from "@/actions/login";
import { InputField } from "./ui/input-field";

export function LoginForm({ onSwitchModal, onCloseModal }) {
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl");

    const [captcha, setCaptcha] = useState(undefined);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [isPending, startTransition] = useTransition();

    const form = useForm({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = (values) => {
        if (captcha) {
            setSuccess("");
            setError("");

            startTransition(() => {
                login(values, callbackUrl).then((data) => {
                    if (data) {
                        setError(data.error);
                        setSuccess(data.success);
                    }
                });
            });
        }
    };

    return (
        <CardWrapper
            headerLabel="Вход"
            backButtonLabel="Ещё нет аккаунта?"
            onClickBackButton={() => onSwitchModal("register")}
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
                        error={error}
                    />

                    <InputField
                        form={form}
                        name="password"
                        label="Введите пароль"
                        type="password"
                        isPending={isPending}
                        placeholder="******"
                        error={error}
                    />
                    {/* <div className="space-y-4">
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Пароль</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            disabled={isPending}
                                            type="password"
                                            placeholder="******"
                                        />
                                    </FormControl>
                                    <Button
                                        size="sm"
                                        variant="link"
                                        asChild
                                        className="px-0 font-normal"
                                    >
                                        <Link href="/auth/reset">
                                            Забыли пароль?
                                        </Link>
                                    </Button>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div> */}
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
