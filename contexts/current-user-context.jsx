"use client";

import { createContext, useCallback, useContext, useState } from "react";

const CurrentUserContext = createContext(null);

export function CurrentUserProvider({ children, ...props }) {
    const context = useCreateCurrentUserContext(props);

    return (
        <CurrentUserContext.Provider value={context}>
            {children}
        </CurrentUserContext.Provider>
    );
}

export function useAppContext() {
    const context = useContext(CurrentUserContext);

    if (!context) throw new Error("Use app context within provider!");
    return context;
}

export const useCreateCurrentUserContext = function (props) {
    const [currentUser, setCurrentUser] = useState(props.currentUser || null);

    const getCurrentUser = useCallback((user) => {
        setCurrentUser((prev) => user);
    }, []);

    return {
        currentUser,
        getCurrentUser,
    };
};
