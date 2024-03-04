import { cn } from "@/lib/utils";

import { UiImage } from "@/components/uikit/ui-image";

export function AboutCard({ children }) {
    return (
        <div className="max-w-[39.375rem] h-max flex flex-col gap-6">
            {children}
        </div>
    );
}

AboutCard.Image = function AboutCardImage({ src, alt }) {
    return (
        <UiImage
            className="max-w-[39.375rem] w-full md:max-w-[39.375rem]"
            src={src}
            alt={alt}
        />
    );
};

AboutCard.Content = function AboutCardContent({
    className,
    title,
    paragraphs,
}) {
    return (
        <div className={cn("flex flex-col gap-4", className)}>
            {title}
            <div className="flex flex-col gap-2">{paragraphs}</div>
        </div>
    );
};

AboutCard.Paragraph = function AboutCardParagraph({ className, children }) {
    return <p className={className}>{children}</p>;
};
