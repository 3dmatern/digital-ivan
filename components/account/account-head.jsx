import { UiHeadingFirst } from "../uikit/heading";
import { UiDivContainer } from "../uikit/ui-div-container";
import { UiSectionWrapper } from "../uikit/ui-section-wrapper";

export function AccountHead() {
    return (
        <UiSectionWrapper className="bg-background-first">
            <UiDivContainer className="pt-2 pb-0 mb-10 text-white md:mb-0 lg:pt-40 lg:pb-0">
                <UiHeadingFirst className="pb-4 border-b border-gray-first md:max-w-full md:pb-0 md:border-none">
                    Личный кабинет
                </UiHeadingFirst>
            </UiDivContainer>
        </UiSectionWrapper>
    );
}
