import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

import { CardWrapper } from "@/components/auth/cardWrapper";

export function ErrorCard() {
    return (
        <CardWrapper
            headerLabel="Упс! Что-то пошло не так!"
            backButtonLabel="Вход"
            backButtonHref="/?auth=login"
        >
            <div className="w-full flex justify-center items-center">
                <ExclamationTriangleIcon className="text-destructive" />
            </div>
        </CardWrapper>
    );
}
