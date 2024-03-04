import workImage from "@/public/main-bg-work.png";

import { WORKS_DATA } from "@/components/home/constants";

import { UiDivContainer } from "@/components/uikit/ui-div-container";
import { UiImage } from "@/components/uikit/ui-image";
import { UiSectionWrapper } from "@/components/uikit/ui-section-wrapper";
import { WorkList } from "@/components/home/ui/work-list";

export function HomeWork() {
    return (
        <UiSectionWrapper>
            <UiDivContainer className="md:flex-row">
                <UiImage src={workImage} alt="work" />
                <WorkList items={WORKS_DATA} />
            </UiDivContainer>
        </UiSectionWrapper>
    );
}
