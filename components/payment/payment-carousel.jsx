"use client";

import { useState, useTransition } from "react";

import { cn } from "@/lib/utils";
import { createSubscribe } from "@/actions/subscribe";
import localStorageService from "@/services/local-storage-service";

import { SUBSCRIPTIONS_DATA } from "@/components/payment/constants";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import { UiHeadingFourth } from "@/components/uikit/heading";
import { Button } from "@/components/ui/button";
import { UiSectionWrapper } from "@/components/uikit/ui-section-wrapper";
import { UiDivContainer } from "@/components/uikit/ui-div-container";
import { FormSuccess } from "@/components/auth/form-success";
import { FormError } from "@/components/auth/form-error";

export function PaymentCarousel() {
    const [isPending, startTransition] = useTransition();
    const [selectSubscribe, setSelectSubscribe] = useState(null);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const handleSelectSubscribe = (selectItem) => {
        setSelectSubscribe((prev) => selectItem);
    };

    const handleSubmit = () => {
        if (!selectSubscribe) return;

        startTransition(async () => {
            const accessToken = localStorageService.getAccessToken();
            const data = await createSubscribe({
                accessToken,
                subscriptionPeriod: selectSubscribe,
            });

            if (data?.error) {
                setError(data.error);
            }

            if (data?.success) {
                setSuccess(data.success);
                localStorageService.setSubscriptionEnd(data.subscriptionEnd);
                onSetUser({
                    ...user,
                    username: data.username,
                    subscriptionEnd: data.subscriptionEnd,
                });
            }
        });
    };

    return (
        <UiSectionWrapper>
            <UiDivContainer className="lg:pt-16 lg:pb-[30px]">
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full md:px-5"
                >
                    <CarouselContent>
                        {SUBSCRIPTIONS_DATA.map((item) => (
                            <CarouselItem
                                key={item.id}
                                className="lg:pl-[30px] basis-auto md:basis-1/2 lg:basis-1/3"
                            >
                                <PaymentCarouselCard
                                    item={item}
                                    onClick={handleSelectSubscribe}
                                    isSelect={selectSubscribe}
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>

                <FormSuccess message={success} />
                <FormError message={error} />
                <Button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isPending || !selectSubscribe}
                    className="max-w-[410px] w-full mx-auto mt-[30px] mb-[120px]"
                >
                    Оплатить
                </Button>
            </UiDivContainer>
        </UiSectionWrapper>
    );
}

function PaymentCarouselCard({ item, isSelect, onClick }) {
    return (
        <div
            className={cn(
                `
                    max-w-[327px] pt-8 px-6 pb-10 flex flex-col gap-12
                    text-center text-white 
                    border rounded-2xl border-gray-first
                    md:max-w-[410px] lg:px-[43px]
                `
            )}
        >
            <UiHeadingFourth className="min-h-[70px]">
                {item.name}
                <br />
                {item.sale && <span className="text-prim">{item.sale}</span>}
            </UiHeadingFourth>
            <p className="pb-2 text-[40px] text-bold leading-[52px] text-center relative">
                {item.price}₽ / мес
                <UnderlineImage className="absolute left-1/2 -translate-x-1/2" />
            </p>

            <Button
                type="button"
                variant={isSelect === item.months ? "outline" : "default"}
                className="w-full"
                onClick={() => onClick(item.months)}
            >
                Выбрать
            </Button>
        </div>
    );
}

function UnderlineImage({ className }) {
    return (
        <svg
            className={className}
            width="219"
            height="10"
            viewBox="0 0 219 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M2 7.5C21.3985 3.72688 91.5564 -1.55548 217 7.5"
                stroke="#3FA6A0"
                strokeWidth="4"
                strokeLinecap="round"
            />
        </svg>
    );
}
