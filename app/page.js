"use client";

import { useContext } from "react";

import {
    HomeHead,
    HomeDifference,
    HomeWork,
    HomeFree,
} from "@/components/home";
import { UiMainContainer } from "@/components/uikit/ui-main-container";
import { ProvidersContext } from "./providers";

export default function HomePage() {
    let { onOpenModal } = useContext(ProvidersContext);

    return (
        <UiMainContainer>
            <HomeHead onOpenModal={onOpenModal} />
            <HomeDifference />
            <HomeWork />
            <HomeFree onOpenModal={onOpenModal} />
        </UiMainContainer>
    );
}
