import { useSession, signOut } from "next-auth/react";

export function useCurrentUser() {
    const { data: session, status } = useSession();
    console.log("useCurrentUser: ", session, status);

    if (!session) {
        signOut();
        return;
    }
    return session.user;
}
