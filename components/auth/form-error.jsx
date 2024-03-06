"use client";

import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

export function FormError({ message }) {
    if (!message) return null;

    return (
        <div className="bg-error/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-error">
            <ExclamationTriangleIcon className="w-4 h-4" />
            <p>{message}</p>
        </div>
    );
}
