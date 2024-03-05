import { LoginSchema } from "@/schemas";

export const login = async (values, callbackUrl) => {
    const validatedFields = LoginSchema.safeParse(values);

    if (!validatedFields.success) {
        return {
            error: "Заполните поля!",
        };
    }

    const { email, password } = validatedFields.data;

    const existingUser = await getUserByEmail(email);

    if (!existingUser || !existingUser.email) {
        return { error: "Email не существует!" };
    }

    if (!existingUser.emailVerified) {
        const verificationToken = await generateVerificationToken(
            existingUser.email
        );

        const response = await sendVerificationBegetSMTP(
            verificationToken.email,
            verificationToken.token
        );

        return response;
    }

    try {
        await signIn("credentials", {
            email,
            password,
            redirectTo: callbackUrl || DEFAULT_LOGIN_REDIRECT,
        });
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return {
                        error: "Неверные учетные данные!",
                    };
                default:
                    return {
                        error: "Что-то пошло не так!",
                    };
            }
        }

        throw error;
    }
};
