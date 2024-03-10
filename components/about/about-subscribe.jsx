import Link from "next/link";

import { Button } from "@/components/ui/button";
import { UiHeadingSecond } from "@/components/uikit/heading";
import { UiDivContainer } from "@/components/uikit/ui-div-container";
import { UiSectionWrapper } from "@/components/uikit/ui-section-wrapper";
import { UiLink } from "@/components/uikit/ui-link";

export function AboutSubscribe() {
    return (
        <UiSectionWrapper
            className={`
                bg-[linear-gradient(to_bottom,rgba(13,16,40,0.2),rgba(13,16,40,1)),url('/about-bg-subscribe.webp')]
                bg-no-repeat bg-[top_left_-30rem] bg-[length:1425px]
                md:bg-[linear-gradient(to_left,rgba(13,16,40,0.2),rgba(13,16,40,1)),url('/about-bg-subscribe.webp')]
                md:bg-[top_right_-30rem] xl:bg-[length:100%]
            `}
        >
            <UiDivContainer
                className={`
                    gap-6 pt-[401px] pb-[52px] 
                    md:pt-[189px] md:pb-[189px] 
                    lg:gap-10 lg:pt-[189px] lg:pb-[189px]
                `}
            >
                <AboutSubscribeBody
                    title={
                        <UiHeadingSecond>
                            Подпишитесь на соц. сети, чтобы быть в курсе
                            обновлений и новостей
                        </UiHeadingSecond>
                    }
                    description={
                        <>
                            При возникновении проблем с приложением, обращайтесь
                            на почту: template@gmail.com или <br />
                            <UiLink
                                href="#"
                                variant="reverse"
                                className="text-base lg:text-2xl lg:leading-9"
                            >
                                в службу поддержки
                            </UiLink>
                        </>
                    }
                />
                <AboutSubscribeAction>
                    <Button
                        asChild
                        type="button"
                        variant="outline"
                        className="max-w-[335px] sm:max-w-max"
                    >
                        <Link href="https://t.me" target="_blank">
                            Перейти в Telegram
                        </Link>
                    </Button>
                    <Button
                        asChild
                        type="button"
                        variant="outline"
                        className="max-w-[335px] sm:max-w-max"
                    >
                        <Link href="https://vk.com" target="_blank">
                            Перейти в VK
                        </Link>
                    </Button>
                </AboutSubscribeAction>
            </UiDivContainer>
        </UiSectionWrapper>
    );
}

function AboutSubscribeBody({ title, description }) {
    return (
        <div className="max-w-[629px] flex flex-col gap-4 lg:gap-8">
            {title}
            <p className="lg:text-2xl lg:leading-9 text-gray-third">
                {description}
            </p>
        </div>
    );
}

function AboutSubscribeAction({ children }) {
    return (
        <div className="flex flex-col gap-4 min-[405px]:flex-row">
            {children}
        </div>
    );
}
