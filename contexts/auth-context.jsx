"use client";

import {
    createContext,
    useCallback,
    useContext,
    useState,
    useEffect,
} from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

import localStorageService from "@/services/local-storage-service";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const authParam = searchParams.get("auth");
    const verifiedToken = searchParams.get("verified");
    const resetToken = searchParams.get("reset");

    const [user, setUser] = useState(null);
    const [isAuth, setIsAuth] = useState(false);
    const [isActiveMobMenu, setIsActiveMobMenu] = useState(false);
    const [isModal, setIsModal] = useState({
        isOpen: false,
        typeForm: null,
    });

    useEffect(() => {
        if (authParam) {
            setIsModal((prev) => ({
                ...prev,
                isOpen: true,
                typeForm: authParam,
            }));
        }
    }, [authParam]);

    useEffect(() => {
        if (verifiedToken) {
            setIsModal((prev) => ({
                ...prev,
                isOpen: true,
                typeForm: "verified",
            }));
        }
        if (resetToken) {
            setIsModal((prev) => ({
                ...prev,
                isOpen: true,
                typeForm: "new-password",
            }));
        }
    }, [resetToken, verifiedToken]);

    useEffect(() => {
        const accessToken = localStorageService.getAccessToken();
        const username = localStorageService.getUsername();
        const subscriptionEnd = localStorageService.getSubscriptionEnd();

        const isToken = !accessToken || accessToken === "undefined";
        const isUsername = !username || username === "undefined";
        const isSubscription =
            !subscriptionEnd || subscriptionEnd === "undefined";

        if (isToken || isUsername || isSubscription) {
            setIsAuth((prev) => false);
            return;
        }

        setUser((prev) => ({
            username,
            subscriptionEnd,
        }));
        setIsAuth((prev) => true);
    }, [router]);

    const handleSetUser = useCallback((currentUser) => {
        setUser((prev) => ({ ...prev, ...currentUser }));
    }, []);

    const handleLogout = () => {
        localStorageService.removeAuthData();
        setUser(null);
        router.push("/");
        return;
    };

    const handleOpenMenu = () => {
        setIsActiveMobMenu((prev) => !prev);
    };

    const handleCloseMenu = () => {
        setIsActiveMobMenu((prev) => false);
    };

    const handleOpenModal = (type) => {
        setIsModal((prev) => ({ ...prev, isOpen: true, typeForm: type }));
    };

    const handleCloseModal = () => {
        setIsModal((prev) => ({ ...prev, isOpen: false, typeForm: null }));
    };

    return (
        <AuthContext.Provider
            value={{
                isAuth,
                user,
                onSetUser: handleSetUser,
                onLogout: handleLogout,
                verifiedToken,
                resetToken,
                isActiveMobMenu,
                typeForm: isModal.typeForm,
                isOpen: isModal.isOpen,
                onOpenMenu: handleOpenMenu,
                onCloseMenu: handleCloseMenu,
                onOpenModal: handleOpenModal,
                onCloseModal: handleCloseModal,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
