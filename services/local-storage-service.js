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
    localStorage.setItem(USERNAME_KEY, username);
    localStorage.setItem(SUBSCRIBE_KEY, subscriptionEnd);
    localStorage.setItem(TOKEN_KEY, accessToken);
    localStorage.setItem(EXPIRES_KEY, expiresIn);
}

export function setSubscriptionEnd(payload) {
    localStorage.setItem(SUBSCRIBE_KEY, payload);
}

export function getAccessToken() {
    return localStorage.getItem(TOKEN_KEY);
}

export function getTokenExpiresDate() {
    return localStorage.getItem(EXPIRES_KEY);
}

export function getUsername() {
    return localStorage.getItem(USERNAME_KEY);
}

export function getSubscriptionEnd() {
    return localStorage.getItem(SUBSCRIBE_KEY);
}

export function removeAuthData() {
    localStorage.removeItem(USERNAME_KEY);
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(EXPIRES_KEY);
    localStorage.removeItem(SUBSCRIBE_KEY);
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
