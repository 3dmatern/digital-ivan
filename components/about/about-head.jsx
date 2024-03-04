import { UiHeadingFirst } from "../uikit/heading";
import { UiDivContainer } from "../uikit/ui-div-container";
import { UiSectionWrapper } from "../uikit/ui-section-wrapper";

export function AboutHead() {
    return (
        <UiSectionWrapper>
            <UiDivContainer className="pt-2 pb-4 mb-10 text-white border-b border-gray-first">
                <UiHeadingFirst className="">О приложении</UiHeadingFirst>
            </UiDivContainer>
        </UiSectionWrapper>
    );
}
