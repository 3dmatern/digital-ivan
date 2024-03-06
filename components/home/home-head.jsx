import { Button } from "@/components/ui/button";
import { UiSectionWrapper } from "@/components/uikit/ui-section-wrapper";
import { UiDivContainer } from "@/components/uikit/ui-div-container";
import { UiHeadingFirst } from "@/components/uikit/heading/ui-heading-first";

export function HomeHead({ onOpenModal }) {
    return (
        <UiSectionWrapper
            className={`
                bg-[linear-gradient(to_bottom,rgba(7,11,34,0.1),rgba(7,11,34,1)),url('/main-bg-head.png')]
                bg-no-repeat bg-[top_left_-5.0625rem] bg-[length:628px]
                min-[550px]:bg-[top_center] sm:bg-[length:100%]
            `}
        >
            <UiDivContainer className="pt-[317px] pb-[52px] lg:pt-[409px] lg:pb-[78px]">
                <UiHeadingFirst>
                    Переводи текст <br /> в играх или приложениях в реальном
                    времени
                </UiHeadingFirst>
                <Button
                    type="button"
                    onClick={() => onOpenModal("register")}
                    className="w-max"
                >
                    Регистрация
                </Button>
            </UiDivContainer>
        </UiSectionWrapper>
    );
}
