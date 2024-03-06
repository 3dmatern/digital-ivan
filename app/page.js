"use client";

import { useAuthNavigate } from "@/hooks/use-auth-navigate";

import {
    HomeHead,
    HomeDifference,
    HomeWork,
    HomeFree,
} from "@/components/home";
import { UiMainContainer } from "@/components/uikit/ui-main-container";

export default function HomePage() {
    const { onOpenModal } = useAuthNavigate();

    return (
        <UiMainContainer>
            <HomeHead onOpenModal={onOpenModal} />
            <HomeDifference />
            <HomeWork />
            <HomeFree onOpenModal={onOpenModal} />
        </UiMainContainer>
    );
}
