"use client";

import localStorageService from "@/services/local-storage-service";

export const logout = () => {
    localStorageService.removeAuthData();
};
