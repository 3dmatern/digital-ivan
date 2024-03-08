"use client";

import { createContext, useContext, useState } from "react";

const CurrentUserContext = createContext(null);

export function CurrentUserProvider({ children, ...props }) {
    const context = useCreateCurrentUserContext(props);

    return (
        <CurrentUserContext.Provider value={context}>
            {children}
        </CurrentUserContext.Provider>
    );
}

export function useCurrentUserContext() {
    const context = useContext(CurrentUserContext);

    if (!context) throw new Error("Use app context within provider!");
    return context;
}

export const useCreateCurrentUserContext = function (props) {
    const [username, setUsername] = useState(props.username || null);
    const [subscriptionEnd, setSubscriptionEnd] = useState(
        props.subscriptionEnd || null
    );

    return {
        username,
        subscriptionEnd,
        setUsername,
        setSubscriptionEnd,
    };
};
