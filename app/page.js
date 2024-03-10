"use client";

import { useAuth } from "@/contexts/auth-context";

import {
    HomeHead,
    HomeDifference,
    HomeWork,
    HomeFree,
} from "@/components/home";
import { UiMainContainer } from "@/components/uikit/ui-main-container";

export default function HomePage() {
    const { onOpenModal } = useAuth();

    return (
        <UiMainContainer>
            <HomeHead onOpenModal={onOpenModal} />
            <HomeDifference />
            <HomeWork />
            <HomeFree onOpenModal={onOpenModal} />
        </UiMainContainer>
    );
}
