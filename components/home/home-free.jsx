import Link from "next/link";

import { Button } from "@/components/ui/button";
import { UiHeadingSecond } from "@/components/uikit/heading";
import { UiDivContainer } from "@/components/uikit/ui-div-container";
import { UiSectionWrapper } from "@/components/uikit/ui-section-wrapper";

export function HomeFree() {
    return (
        <UiSectionWrapper
            className={`
                bg-[linear-gradient(to_bottom,rgba(13,16,40,0.2),rgba(13,16,40,1)),url('/main-bg-free.webp')]
                bg-no-repeat bg-[top_left_-23.5rem] bg-[length:1200px]
                md:bg-[linear-gradient(to_left,rgba(13,16,40,0.2),rgba(13,16,40,1)),url('/main-bg-free.webp')]
                md:bg-right-top xl:bg-[length:100%]
            `}
        >
            <UiDivContainer className="gap-6 pt-[549px] pb-[54px] lg:gap-10 lg:pt-[207px] lg:pb-[207px]">
                <HomeFreeBody
                    title={
                        <UiHeadingSecond>
                            Дарим два дня бесплатной подписки за регистрацию
                        </UiHeadingSecond>
                    }
                    description="Зарегистрируйся и получи 2 дня подписки абсолютно
                        бесплатно"
                />
                <Button asChild type="button" className="w-max">
                    <Link href="/?auth=register">Регистрация</Link>
                </Button>
            </UiDivContainer>
        </UiSectionWrapper>
    );
}

function HomeFreeBody({ title, description }) {
    return (
        <div className="max-w-[553px] flex flex-col gap-4 lg:gap-8">
            {title}
            <p className="lg:text-2xl lg:leading-9 text-gray-third">
                {description}
            </p>
        </div>
    );
}
