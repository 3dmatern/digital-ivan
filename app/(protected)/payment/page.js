import { UiMainContainer } from "@/components/uikit/ui-main-container";
import { PaymentCarousel, PaymentHead } from "@/components/payment";

export const metadata = {
    title: "NIKO | Оплата подписки",
};

export default function PaymentPage() {
    return (
        <UiMainContainer>
            <PaymentHead />
            <PaymentCarousel />
        </UiMainContainer>
    );
}
