import { UiHeadingFirst, UiHeadingSecond } from "../uikit/heading";
import { UiDivContainer } from "../uikit/ui-div-container";
import { UiSectionWrapper } from "../uikit/ui-section-wrapper";

export function AboutModes() {
    return (
        <UiSectionWrapper>
            <UiDivContainer className="pt-0 pb-14 text-white">
                <UiHeadingSecond>
                    Переводчик работает в двух режимах
                </UiHeadingSecond>
            </UiDivContainer>
        </UiSectionWrapper>
    );
}
