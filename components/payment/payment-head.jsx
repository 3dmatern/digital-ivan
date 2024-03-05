import { UiHeadingFirst } from "../uikit/heading";
import { UiDivContainer } from "../uikit/ui-div-container";
import { UiSectionWrapper } from "../uikit/ui-section-wrapper";

export function PaymentHead() {
    return (
        <UiSectionWrapper>
            <UiDivContainer className="px-[18px]">
                <PaymentHeadContainer
                    title={
                        <UiHeadingFirst className="max-w-full sm:max-w-full md:max-w-full">
                            Оплата подписки
                        </UiHeadingFirst>
                    }
                    description="Выберите наиболее привлекательный тариф"
                />
            </UiDivContainer>
        </UiSectionWrapper>
    );
}

function PaymentHeadContainer({ title, description }) {
    return (
        <div className="flex flex-col gap-4 text-center">
            {title}
            <p className="text-gray-third">{description}</p>
        </div>
    );
}
