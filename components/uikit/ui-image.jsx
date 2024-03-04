import Image from "next/image";

import { cn } from "@/lib/utils";

export function UiImage({ className, src, alt }) {
    return (
        <div
            className={cn(
                `
                    max-w-[37.25rem] h-max rounded-3xl
                    flex items-center justify-center
                `,
                className
            )}
        >
            <picture>
                <Image src={src} alt={alt} className="rounded-3xl" />
            </picture>
        </div>
    );
}
