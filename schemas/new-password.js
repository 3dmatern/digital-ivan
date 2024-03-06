import z from "zod";

export const NewPasswordSchema = z
    .object({
        password: z.string().trim().min(6, {
            message: "Минимум 6 смиволов.",
        }),
        confirmPassword: z.string().trim().min(6, {
            message: "Минимум 6 смиволов.",
        }),
    })
    .refine(
        (data) => {
            if (data.password !== data.confirmPassword) {
                return false;
            }
            return true;
        },
        { message: "Пароли не совпадают", path: ["confirmPassword"] }
    );
