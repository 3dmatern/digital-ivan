/**
 * @param {{
 *  width: "md" | "full",
 *  className: string,
 *  isOpen: boolean,
 *  onClose: Function,
 * }} props
 * @returns
 */

import { createPortal } from "react-dom";

import { cn } from "@/lib/utils";
import { UiCrossIcon } from "./icons/ui-cross-icon";

export function UiModal({
    className,
    children,
    width = "md",
    isOpen = true,
    onClose,
}) {
    if (!isOpen) {
        return null;
    }

    const modalCarousel = (
        <div
            className={cn(
                `
                    fixed inset-0 z-[999] flex items-center justify-center 
                    bg-black/60 backdrop-blur overflow-y-auto
                `,
                className
            )}
        >
            <div
                className={cn(
                    "min-h-[320px] h-full sm:h-max py-20 flex items-center justify-center mx-auto sm:rounded-3xl bg-white relative",
                    {
                        md: "max-w-[630px] w-full",
                        full: "mx-5",
                    }[width]
                )}
            >
                <button
                    onClick={onClose}
                    className="
                       size-6 rounded 
                       flex items-center justify-center 
                       absolute top-6 right-6
                   "
                >
                    <UiCrossIcon className="size-4" />
                </button>
                {children}
            </div>
        </div>
    );

    return createPortal(modalCarousel, document.getElementById("modals"));
}

UiModal.Header = function UiModalHeader({ className, children }) {
    return (
        <div className={cn("px-6 py-4 text-center text-2xl", className)}>
            {children}
        </div>
    );
};

UiModal.Body = function UiModalBody({ className, children }) {
    return <div className={cn("px-6", className)}>{children}</div>;
};

UiModal.Footer = function UiModalFooter({ className, children }) {
    return (
        <div className={cn("flex justify-end gap-4 mt-auto p-6", className)}>
            {children}
        </div>
    );
};
