import z from "zod";

import {
    CAPITAL_REGEXP,
    DIGIT_REGEXP,
    LOWER_REGEXP,
} from "@/schemas/constants";

export const RegisterSchema = z
    .object({
        email: z.string().email({
            message: "Email обязателен",
        }),
        username: z.string().trim().min(3, { message: "Минимум из трёх букв" }),
        password: z
            .string()
            .trim()
            .min(8, {
                message: "Минимум 8 символов",
            })
            .regex(LOWER_REGEXP, {
                message: "Хотя бы одну букву в нижнем регистре",
            })
            .regex(CAPITAL_REGEXP, {
                message: "Хотя бы одну букву в верхнем регистре",
            })
            .regex(DIGIT_REGEXP, {
                message: "Хотя бы одну цифру",
            }),
        confirmPassword: z.string().trim().min(8, {
            message: "Минимум 8 символов",
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
