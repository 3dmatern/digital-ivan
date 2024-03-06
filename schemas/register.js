import z from "zod";

export const RegisterSchema = z
    .object({
        email: z.string().email({
            message: "Email обязателен",
        }),
        nickname: z.string().trim().min(3, { message: "Минимум из трёх букв" }),
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
