"use client";

import { useEffect, useState } from "react";

import localStorageService from "@/services/local-storage-service";

export function useCurrentUser() {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        setCurrentUser((prev) => localStorageService.getUserData());
    }, []);

    const updateCurrentUser = (payload) => {
        setCurrentUser((prev) => ({ ...prev, ...payload }));
    };

    return {
        currentUser,
        updateCurrentUser,
    };
}
