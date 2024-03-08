"use client";

const USERNAME_KEY = "username";
const TOKEN_KEY = "jwt-token";
const EXPIRES_KEY = "jwt-expires";
const SUBSCRIBE_KEY = "subscriptionEnd";

export function setTokens({
    username,
    accessToken,
    expiresIn,
    subscriptionEnd,
}) {
    if (typeof window !== "undefined") {
        localStorage.setItem(USERNAME_KEY, username);
        localStorage.setItem(TOKEN_KEY, accessToken);
        localStorage.setItem(EXPIRES_KEY, expiresIn);
        localStorage.setItem(SUBSCRIBE_KEY, subscriptionEnd);
    }
}

export function setSubscriptionEnd(payload) {
    if (typeof window !== "undefined") {
        localStorage.setItem(SUBSCRIBE_KEY, payload);
    }
}

export function getAccessToken() {
    if (typeof window !== "undefined") {
        return localStorage.getItem(TOKEN_KEY);
    }
}

export function getTokenExpiresDate() {
    if (typeof window !== "undefined") {
        return localStorage.getItem(EXPIRES_KEY);
    }
}

export function getUsername() {
    if (typeof window !== "undefined") {
        return localStorage.getItem(USERNAME_KEY);
    }
}

export function getSubscriptionEnd() {
    if (typeof window !== "undefined") {
        return localStorage.getItem(SUBSCRIBE_KEY);
    }
}

export function removeAuthData() {
    if (typeof window !== "undefined") {
        localStorage.removeItem(USERNAME_KEY);
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(EXPIRES_KEY);
        localStorage.removeItem(SUBSCRIBE_KEY);
    }
}

const localStorageService = {
    setTokens,
    setSubscriptionEnd,
    getAccessToken,
    getTokenExpiresDate,
    getUsername,
    getSubscriptionEnd,
    removeAuthData,
};

export default localStorageService;
