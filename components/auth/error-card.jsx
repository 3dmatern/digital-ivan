import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

import { CardWrapper } from "@/components/auth/cardWrapper";

export function ErrorCard({ onClickBackButton, onCloseModal }) {
    return (
        <CardWrapper
            headerLabel="Упс! Что-то пошло не так!"
            backButtonLabel="Вход"
            onClickBackButton={() => onClickBackButton("login")}
            onCloseModal={onCloseModal}
        >
            <div className="w-full flex justify-center items-center">
                <ExclamationTriangleIcon className="text-destructive" />
            </div>
        </CardWrapper>
    );
}
