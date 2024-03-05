import z from "zod";

export const NewPasswordSchema = z.object({
    password: z.string().min(6, {
        message: "Минимум 6 смиволов.",
    }),
});
