"use client";

import { useContext } from "react";

import { AuthNavigateContext } from "@/contexts/auth-navigate-context";

import {
    HomeHead,
    HomeDifference,
    HomeWork,
    HomeFree,
} from "@/components/home";
import { UiMainContainer } from "@/components/uikit/ui-main-container";

export default function HomePage() {
    const { onOpenModal } = useContext(AuthNavigateContext);

    return (
        <UiMainContainer>
            <HomeHead onOpenModal={onOpenModal} />
            <HomeDifference />
            <HomeWork />
            <HomeFree onOpenModal={onOpenModal} />
        </UiMainContainer>
    );
}
