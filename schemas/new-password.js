import z from "zod";

import {
    CAPITAL_REGEXP,
    DIGIT_REGEXP,
    LOWER_REGEXP,
} from "@/schemas/constants";

export const NewPasswordSchema = z
    .object({
        password: z
            .string()
            .trim()
            .min(8, {
                message: "Минимум 8 смиволов",
            })
            .regex(CAPITAL_REGEXP, {
                message: "Хотя бы одну букву в нижнем регистре",
            })
            .regex(DIGIT_REGEXP, {
                message: "Хотя бы одну букву в верхнем регистре",
            })
            .regex(LOWER_REGEXP, {
                message: "Хотя бы одну цифру",
            }),
        confirmPassword: z.string().trim().min(8, {
            message: "Минимум 8 смиволов",
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
