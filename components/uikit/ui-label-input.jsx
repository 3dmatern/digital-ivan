import { cn } from "@/lib/utils";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LabelRequiredIcon } from "./icons/label-required-icon";

export function UiLabelInput({
    className,
    label = "Введите телефон",
    placeholder = "text placeholder",
}) {
    return (
        <Label
            className={cn(
                `
                    relative
                `,
                className
            )}
        >
            <LabelText label={label} />
            <Input
                className={`
                    h-12 rounded text-base 
                    text-gray-first placeholder:text-gray-first 
                    border-gray-third focus:border-prim px-4 py-3 shadow-none
                    focus-visible:ring-0
                `}
                placeholder={placeholder}
            />
        </Label>
    );
}

function LabelText({ className, label }) {
    return (
        <span className={cn("w-max relative px-4", className)}>
            {label}
            <span className="absolute top-0 right-1.5 text-xs text-error leading-[18px] p-0 m-0 h-1.5">
                *
            </span>
        </span>
    );
}
