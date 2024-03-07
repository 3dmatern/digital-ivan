const TOKEN_KEY = "jwt-token";
const EXPIRES_KEY = "jwt-expires";
const USERID_KEY = "user-id";
const USER_DATA_KEY = "user-data";

export function setTokens({ accessToken, userId, expiresIn }) {
    localStorage.setItem(USERID_KEY, userId);
    localStorage.setItem(TOKEN_KEY, accessToken);
    localStorage.setItem(EXPIRES_KEY, expiresIn);
}

export function setUser(user) {
    localStorage.setItem(USER_DATA_KEY, JSON.stringify(user));
}

export function getAccessToken() {
    return localStorage.getItem(TOKEN_KEY);
}

export function getTokenExpiresDate() {
    return localStorage.getItem(EXPIRES_KEY);
}

export function getUser() {
    const userData = JSON.parse(localStorage.getItem(USER_DATA_KEY));

    return userData;
}

export function getUserId() {
    return localStorage.getItem(USERID_KEY);
}

export function updUser(payload) {
    const user = JSON.parse(localStorage.getItem(USER_DATA_KEY));
    const updatedUser = JSON.stringify({ ...user, ...payload });
    localStorage.setItem(USER_DATA_KEY, updatedUser);
}

export function removeAuthData() {
    localStorage.removeItem(USERID_KEY);
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(EXPIRES_KEY);
    localStorage.removeItem(USER_DATA_KEY);
}

const localStorageService = {
    setTokens,
    setUser,
    getAccessToken,
    getTokenExpiresDate,
    getUser,
    getUserId,
    updUser,
    removeAuthData,
};

export default localStorageService;
