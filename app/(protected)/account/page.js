import { cookies } from "next/headers";

import { UiMainContainer } from "@/components/uikit/ui-main-container";
import {
    AccountHead,
    AccountInfo,
    AccountSubscribe,
} from "@/components/account";

export const metadata = {
    title: "NIKO | Личный кабинет",
};

export default function AccountPage() {
    const username = cookies().get("username")?.value;
    const subscriptionEnd = cookies().get("subscriptionEnd")?.value;

    return (
        <UiMainContainer>
            <AccountHead />
            <AccountInfo
                username={username}
                subscriptionEnd={subscriptionEnd}
            />
            <AccountSubscribe />
        </UiMainContainer>
    );
}
