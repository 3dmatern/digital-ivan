import { UiMainContainer } from "@/components/uikit/ui-main-container";
import { AboutHead, AboutModes, AboutSubscribe } from "@/components/about";

export const metadata = {
    title: "NIKO | О приложении",
    description:
        "Узнай подробнее о переводчике NIKO для текста в играх или приложениях в реальном времени",
    alternates: {
        canonical: "/about-app",
    },
};

export default function AboutAppPage() {
    return (
        <UiMainContainer>
            <AboutHead />
            <AboutModes />
            <AboutSubscribe />
        </UiMainContainer>
    );
}
