import Link from "next/link";

import { Button } from "@/components/ui/button";
import { UiHeadingSecond } from "@/components/uikit/heading";
import { UiDivContainer } from "@/components/uikit/ui-div-container";
import { UiSectionWrapper } from "@/components/uikit/ui-section-wrapper";
import { UiLink } from "@/components/uikit/ui-link";

export function AccountSubscribe() {
    return (
        <UiSectionWrapper
            className={`
                bg-[linear-gradient(to_bottom,rgba(13,16,40,0.2),rgba(13,16,40,1)),url('/about-bg-subscribe.webp')]
                bg-no-repeat bg-[top_left_-30rem] bg-[length:1425px]
                md:bg-[linear-gradient(to_left,rgba(13,16,40,0.2),rgba(13,16,40,1)),url('/about-bg-subscribe.webp')]
                md:bg-[top_right_-30rem] lg:bg-none
            `}
        >
            <UiDivContainer
                className={`
                    gap-6 pt-[401px] pb-[52px] 
                    md:pt-[189px] md:pb-[189px] 
                    lg:gap-10 lg:pt-[189px] lg:pb-[189px]
                `}
            >
                <AccountSubscribeBody
                    title={
                        <UiHeadingSecond>
                            Подпишитесь на соц. сети, чтобы быть в курсе
                            обновлений и новостей
                        </UiHeadingSecond>
                    }
                    description={
                        <>
                            При возникновении проблем с приложением, обращайтесь
                            на почту: template@gmail.com или{" "}
                            <UiLink
                                href="#"
                                variant="reverse"
                                className="text-base lg:text-2xl lg:leading-9"
                            >
                                в службу поддержки
                            </UiLink>
                        </>
                    }
                    actions={
                        <>
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
                        </>
                    }
                />
            </UiDivContainer>
        </UiSectionWrapper>
    );
}

function AccountSubscribeBody({ title, description, actions }) {
    return (
        <div className="max-w-[629px] flex flex-col gap-4 lg:max-w-full lg:flex-row lg:gap-8 lg:justify-between">
            {title}

            <div className="max-w-[523px] flex flex-col gap-6 md:gap-10">
                <p className="lg:text-2xl lg:leading-9 text-gray-third">
                    {description}
                </p>
                <div className="flex flex-col gap-4 min-[405px]:flex-row">
                    {actions}
                </div>
            </div>
        </div>
    );
}
