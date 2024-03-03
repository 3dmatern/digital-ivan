import Image from "next/image";

import { UiHeadingSecond } from "../uikit/heading";
import { UiDivContainer } from "../uikit/ui-div-container";
import { UiSectionWrapper } from "../uikit/ui-section-wrapper";
import { DIFFERENCES_DATA } from "./constants";
import { DifferenceCard } from "./ui/difference-card";
import { UiHeadingThird } from "../uikit/heading/ui-heading-third";

export function HomeDifference() {
    return (
        <UiSectionWrapper>
            <UiDivContainer className="gap-10">
                <UiHeadingSecond>
                    Чем <HighlightedTitle /> отличается от других переводчиков?
                </UiHeadingSecond>
                <HomeDifferenceBody>
                    {DIFFERENCES_DATA.map((diff) => (
                        <DifferenceCard key={diff.id}>
                            <DifferenceCard.Icon>
                                <Image src={diff.icon} alt={diff.title} />
                            </DifferenceCard.Icon>
                            <DifferenceCard.Body
                                title={
                                    <UiHeadingThird>
                                        {diff.title}
                                    </UiHeadingThird>
                                }
                                description={diff.description}
                            />
                        </DifferenceCard>
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
    return <div className="flex flex-wrap gap-8">{children}</div>;
}
