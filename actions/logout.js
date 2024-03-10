"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const logout = () => {
    cookies().delete("username");
    cookies().delete("subscriptionEnd");
    cookies().delete("accessToken");
    cookies().delete("expiresIn");

    redirect("/");
};
