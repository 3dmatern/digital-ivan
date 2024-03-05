import { UiHeadingFirst } from "../uikit/heading";
import { UiDivContainer } from "../uikit/ui-div-container";
import { UiSectionWrapper } from "../uikit/ui-section-wrapper";

export function AboutHead() {
    return (
        <UiSectionWrapper>
            <UiDivContainer className="pt-2 pb-0 mb-10 text-white lg:pt-16 lg:pb-4">
                <UiHeadingFirst className="pb-4 border-b border-gray-first md:max-w-full">
                    О приложении
                </UiHeadingFirst>
            </UiDivContainer>
        </UiSectionWrapper>
    );
}
