import Link from "next/link";
import { Button } from "../ui/button";
import { UiHeadingFourth } from "../uikit/heading";
import { UiDivContainer } from "../uikit/ui-div-container";
import { UiSectionWrapper } from "../uikit/ui-section-wrapper";
import { UiLink } from "../uikit/ui-link";
import { UiDivider } from "../uikit/ui-divider";
import { getConcatDMY } from "@/utils/formatedDate";

export function AccountInfo({}) {
    return (
        <UiSectionWrapper className="bg-background-first">
            <UiDivContainer className="pt-6 pb-14 lg:pt-10 lg:pb-[158px]">
                <AccountInfoBody>
                    <AccountInfoUser
                        currentUser={{
                            nickname: "nickname",
                            subscription: Date.now(),
                        }}
                    />
                    <UiDivider className="hidden md:block" />
                    <AccountInfoApp />
                </AccountInfoBody>
            </UiDivContainer>
        </UiSectionWrapper>
    );
}

function AccountInfoBody({ children }) {
    return (
        <div className="flex flex-col gap-14 md:flex-row lg:justify-around">
            {children}
        </div>
    );
}

function AccountInfoUser({ currentUser }) {
    return (
        <div className=" flex flex-col gap-6 text-white">
            <div className="flex flex-col gap-2">
                <UiHeadingFourth>User: {currentUser.nickname}</UiHeadingFourth>
                <p className="text-gray-third">
                    Дата окончания подписки:{" "}
                    <span className="text-prim">
                        {getConcatDMY(currentUser.subscription)}
                    </span>
                </p>
            </div>

            <Button asChild>
                <Link href="/payment" className="w-max">
                    Продлить подписку
                </Link>
            </Button>
        </div>
    );
}

function AccountInfoApp() {
    return (
        <div className="flex flex-col gap-6 text-white">
            <div className="flex flex-col gap-2">
                <UiHeadingFourth>Загрузка приложения</UiHeadingFourth>
                <p className="text-gray-third">
                    Перед использованием ознакомьтесь с краткой инструкцией на
                    странице{" "}
                    <UiLink
                        href="/about-app"
                        variant="reverse"
                        className="text-base"
                    >
                        “О приложении”
                    </UiLink>
                </p>
                <p className="text-gray-third">
                    Скачивая переводчик вы соглашаетесь с условиями договора
                    Лицензии-оферты,{" "}
                    <UiLink
                        href="/next.svg"
                        variant="reverse"
                        download={true}
                        target="_blank"
                        className="text-base"
                    >
                        скачать договор.
                    </UiLink>
                </p>
            </div>

            <Button asChild variant="outline" className="w-max">
                <Link href="/vercel.svg" target="_blank" download>
                    Скачать переводчик
                </Link>
            </Button>
        </div>
    );
}
