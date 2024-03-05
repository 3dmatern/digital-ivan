import Image from "next/image";

import { UiHeadingSecond } from "../uikit/heading";
import { UiDivContainer } from "../uikit/ui-div-container";
import { UiSectionWrapper } from "../uikit/ui-section-wrapper";
import { DIFFERENCES_DATA } from "./constants";
import { MainCard } from "./ui/main-card";
import { UiHeadingThird } from "../uikit/heading/ui-heading-third";

export function HomeDifference() {
    return (
        <UiSectionWrapper className="bg-background-second">
            <UiDivContainer className="gap-10 md:gap-16">
                <UiHeadingSecond>
                    Чем <HighlightedTitle /> отличается от других переводчиков?
                </UiHeadingSecond>
                <HomeDifferenceBody>
                    {DIFFERENCES_DATA.map((diff) => (
                        <MainCard key={diff.id}>
                            <MainCard.Icon>
                                <Image src={diff.icon} alt={diff.title} />
                            </MainCard.Icon>
                            <MainCard.Body
                                title={
                                    <UiHeadingThird>
                                        {diff.title}
                                    </UiHeadingThird>
                                }
                                description={diff.description}
                            />
                        </MainCard>
                    ))}
                </HomeDifferenceBody>
            </UiDivContainer>
        </UiSectionWrapper>
    );
}

function HighlightedTitle() {
    return <span className="uppercase text-prim">niko</span>;
}

function HomeDifferenceBody({ children }) {
    return <div className="flex flex-wrap gap-8 md:gap-[30px]">{children}</div>;
}
