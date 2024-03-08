import z from "zod";

export const LoginSchema = z.object({
    username: z
        .string()
        .trim()
        .refine(
            (data) => {
                if (!data) {
                    return false;
                }
                return true;
            },
            { message: "Обязательно для заполнения" }
        ),
    password: z
        .string()
        .trim()
        .min(1, { message: "Обязательно для заполнения" }),
});
