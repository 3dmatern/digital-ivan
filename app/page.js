import {
    HomeHead,
    HomeDifference,
    HomeWork,
    HomeFree,
} from "@/components/home";
import { UiMainContainer } from "@/components/uikit/ui-main-container";

export default function HomePage() {
    return (
        <UiMainContainer>
            <HomeHead />
            <HomeDifference />
            <HomeWork />
            <HomeFree />
        </UiMainContainer>
    );
}
