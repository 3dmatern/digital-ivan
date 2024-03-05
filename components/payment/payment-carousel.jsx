"use client";

import { cn } from "@/lib/utils";

import { SUBSCRIPTIONS_DATA } from "@/components/payment/constants";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import { UiHeadingFourth } from "@/components/uikit/heading";
import { Button } from "@/components/ui/button";
import { UiSectionWrapper } from "../uikit/ui-section-wrapper";
import { UiDivContainer } from "../uikit/ui-div-container";
import Link from "next/link";

export function PaymentCarousel() {
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
                                <PaymentCarouselCard item={item} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
                <Button
                    asChild
                    className="max-w-[410px] w-full mx-auto mt-[30px] mb-[120px]"
                >
                    <Link href="#" target="_blank">
                        Оплатить
                    </Link>
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
                variant={!isSelect && "outline"}
                className="w-full"
                onClick={() => onClick(item.period)}
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
                stroke-width="4"
                stroke-linecap="round"
            />
        </svg>
    );
}
