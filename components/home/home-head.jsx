import { Button } from "@/components/ui/button";
import { UiSectionWrapper } from "@/components/uikit/ui-section-wrapper";
import { UiDivContainer } from "@/components/uikit/ui-div-container";
import { UiHeadingFirst } from "@/components/uikit/heading/ui-heading-first";

export function HomeHead() {
    return (
        <UiSectionWrapper
            className={`
                bg-[linear-gradient(to_bottom,rgba(7,11,34,0),rgba(7,11,34,1)),url('/main-bg-head.png')]
                bg-no-repeat bg-[top_left_-5.0625rem] bg-[length:628px]
                sm:bg-top-center min-[550px]:bg-[top_left_0rem] sm:bg-[length:100%]
            `}
        >
            <UiDivContainer className="pt-[317px] px-5 pb-[52px]">
                <UiHeadingFirst>
                    Переводи текст <br /> в играх или приложениях в реальном
                    времени
                </UiHeadingFirst>
                <Button type="button" className="w-max">
                    Регистрация
                </Button>
            </UiDivContainer>
        </UiSectionWrapper>
    );
}
