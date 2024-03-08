import { auth, signOut } from "@/auth";

export const currentUser = async () => {
    const session = await auth();
    console.log("currentUser: ", session);

    if (!session) {
        signOut();
        return;
    }
    return session.user;
};
