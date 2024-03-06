"use client";

import { useState } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UiDangerIcon } from "@/components/uikit/icons/ui-danger-icon";
import { Button } from "@/components/ui/button";

export function InputField({
    className,
    form,
    name,
    label,
    type,
    placeholder,
    isPending,
    forgotPassword,
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
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <InputFieldContainer>
                        <FormLabel
                            className={cn(
                                "w-max ml-3 pl-1 pr-3.5 absolute top-1/2 -translate-y-1/2 pointer-events-none",
                                getLabelTextClassName(),
                                className
                            )}
                        >
                            {label} <LabelRequired />
                        </FormLabel>
                        <FormControl>
                            <Input
                                {...field}
                                type={type}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                placeholder={isFocus ? placeholder : null}
                                disabled={isPending}
                                // autocomplete="off"
                                className={cn(
                                    `
                                            h-12 rounded text-base 
                                            text-gray-first placeholder:text-gray-second 
                                            border-gray-third focus:border-prim px-4 py-3 shadow-none
                                            focus-visible:ring-0
                                        `,
                                    error && "border-error"
                                )}
                            />
                        </FormControl>
                        {error && (
                            <UiDangerIcon className="absolute top-1/2 -translate-y-1/2 right-4 text-error" />
                        )}
                        {}
                    </InputFieldContainer>
                    {forgotPassword}
                    <FormMessage
                        style={{ marginTop: "4px" }}
                        className="text-xs text-error leading-[18px]"
                    />
                </FormItem>
            )}
        />
    );
}

function InputFieldContainer({ className, children }) {
    return <div className={cn("relative", className)}>{children}</div>;
}

function LabelRequired() {
    return (
        <span className="absolute top-0 right-1.5 text-error leading-[12px] p-0 m-0">
            *
        </span>
    );
}
