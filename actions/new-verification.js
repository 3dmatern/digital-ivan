"use client";

export const newVerification = async (token) => {
    // const existingToken = await getVerificationTokenByToken(token);

    // if (!existingToken) {
    //     return {
    //         error: "Токен активации не существует!",
    //     };
    // }

    // const hasExpired = new Date(existingToken.expires) < new Date();

    // if (hasExpired) {
    //     return { error: "Токен активации устарел!" };
    // }

    // const existingUser = await getUserByEmail(existingToken.email);

    // if (!existingUser) {
    //     return {
    //         error: "Email не существует!",
    //     };
    // }

    // await db.user.update({
    //     where: {
    //         id: existingUser.id,
    //     },
    //     data: {
    //         emailVerified: new Date(),
    //         email: existingToken.email,
    //     },
    // });

    // await db.verificationToken.delete({
    //     where: { id: existingToken.id },
    // });

    if (token !== "dsd") {
        return {
            error: "Токен активации не существует!",
        };
    }

    return {
        // success: "Email подтвержден!",
        success: "Почта подтверждена, теперь вы можете войти",
    };
};
