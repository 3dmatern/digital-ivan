import workImage from "@/public/main-bg-work.webp";

import { WORKS_DATA } from "@/components/home/constants";

import { UiDivContainer } from "@/components/uikit/ui-div-container";
import { UiImage } from "@/components/uikit/ui-image";
import { UiSectionWrapper } from "@/components/uikit/ui-section-wrapper";
import { WorkList } from "@/components/home/ui/work-list";
import { UiHeadingSecond } from "@/components/uikit/heading";

export function HomeWork() {
    return (
        <UiSectionWrapper className="bg-background-first">
            <UiDivContainer className="pt-[4.5rem] pb-[4.5rem] md:flex-row lg:gap-20">
                <UiImage src={workImage} alt="work" />
                <HomeWorkBody>
                    <UiHeadingSecond className="md:max-w-full md:text-3xl lg:text-4xl xl:text-5xl">
                        Как это работает?
                    </UiHeadingSecond>
                    <WorkList items={WORKS_DATA} />
                </HomeWorkBody>
            </UiDivContainer>
        </UiSectionWrapper>
    );
}

function HomeWorkBody({ children }) {
    return (
        <div className="max-w-[34.3125rem] flex flex-col gap-10 md:gap-12">
            {children}
        </div>
    );
}
