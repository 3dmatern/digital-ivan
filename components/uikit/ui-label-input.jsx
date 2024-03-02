"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UiDangerIcon } from "./icons/ui-danger-icon";

export function UiLabelInput({
    className,
    label = "Введите телефон",
    placeholder = "text placeholder",
    error,
}) {
    const [isFocus, setIsFocus] = useState(false);

    const handleFocus = ({ target }) => {
        if (target.value === "") {
            setIsFocus((prev) => true);
        }
    };

    const handleBlur = ({ target }) => {
        if (target.value === "") {
            setIsFocus((prev) => false);
        }
    };

    const getLabelTextClassName = () => {
        let className = "";

        if (isFocus) {
            className += " absolute -top-1.5 -translate-y-0 text-xs bg-white";
        }

        if (error) {
            className += " text-error";
        }

        return className;
    };

    return (
        <>
            <Label className={cn(`relative`, className)}>
                <LabelText className={getLabelTextClassName()} label={label} />

                <Input
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    placeholder={isFocus ? placeholder : null}
                    className={cn(
                        `
                        h-12 rounded text-base 
                        text-gray-first placeholder:text-gray-first 
                        border-gray-third focus:border-prim px-4 py-3 shadow-none
                        focus-visible:ring-0
                    `,
                        error && "border-error"
                    )}
                />

                {error && (
                    <UiDangerIcon className="absolute top-1/2 -translate-y-1/2 right-4 text-error" />
                )}
            </Label>
            {error && <ErrorMessage message={error} />}
        </>
    );
}

function LabelText({ className, label }) {
    return (
        <span
            className={cn(
                "w-max ml-3 pl-1 pr-3.5 absolute top-1/2 -translate-y-1/2 pointer-events-none",
                className
            )}
        >
            {label}

            <span className="absolute top-0 right-1.5 text-error leading-[12px] p-0 m-0">
                *
            </span>
        </span>
    );
}

function ErrorMessage({ className, message }) {
    return (
        <p className={cn("text-xs text-error leading-[18px]", className)}>
            {message}
        </p>
    );
}
