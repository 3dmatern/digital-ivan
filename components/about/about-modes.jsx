"use client";

import cardImage from "@/public/about-card-image.png";

import { UiHeadingSecond } from "@/components/uikit/heading";
import { UiDivContainer } from "@/components/uikit/ui-div-container";
import { UiSectionWrapper } from "@/components/uikit/ui-section-wrapper";
import { AboutCard } from "@/components/about/ui/about-card";
import { UiHeadingFourth } from "@/components/uikit/heading/ui-heading-fourth";

export function AboutModes() {
    return (
        <UiSectionWrapper>
            <UiDivContainer className="pt-0 pb-14 text-white lg:pt-16">
                <UiHeadingSecond className="lg:max-w-full md:text-[32px] lg:text-[32px] md:lg:leading-[41.6px]">
                    Переводчик работает в двух режимах
                </UiHeadingSecond>
                <AboutModes.Body>
                    <AboutCard>
                        <AboutCard.Image src={cardImage} alt="window" />
                        <AboutCard.Content
                            title={
                                <UiHeadingFourth>
                                    Перевод на всем окне
                                </UiHeadingFourth>
                            }
                            paragraphs={
                                <>
                                    <AboutCard.Paragraph>
                                        Перевод на всем окне — это инструмент
                                        для быстрого перевода отдельных слов и
                                        строк на всем экране.
                                    </AboutCard.Paragraph>
                                    <AboutCard.Paragraph>
                                        F1: Используйте эту клавишу для показа
                                        или скрытия переведенного текста на
                                        оверлейном окне. Это позволит вам
                                        сравнивать оригинальный и переведенный
                                        текст.
                                    </AboutCard.Paragraph>
                                    <AboutCard.Paragraph>
                                        F2: Нажмите эту клавишу для захвата
                                        текущего кадра и запуска процесса
                                        распознавания и перевода текста на всем
                                        окне.
                                    </AboutCard.Paragraph>
                                </>
                            }
                        />
                    </AboutCard>
                    <AboutCard>
                        <AboutCard.Image src={cardImage} alt="window" />
                        <AboutCard.Content
                            title={
                                <UiHeadingFourth>
                                    Перевод выбранной зоны
                                </UiHeadingFourth>
                            }
                            paragraphs={
                                <>
                                    <AboutCard.Paragraph>
                                        Перевод выбранных зон предназначен для
                                        точечного перевода определенных участков
                                        текста, что идеально подходит для
                                        абзацев и связанных текстовых блоков
                                    </AboutCard.Paragraph>
                                    <AboutCard.Paragraph>
                                        F3: Используйте эту клавишу для показа
                                        или скрытия переведенного текста в
                                        выбранных зонах на оверлейном окне.
                                    </AboutCard.Paragraph>
                                    <AboutCard.Paragraph>
                                        F4: Эта клавиша позволяет захватить
                                        текущий кадр с выбранными зонами и
                                        начать процесс распознавания и перевода
                                    </AboutCard.Paragraph>
                                    <AboutCard.Paragraph>
                                        F5: Нажмите эту клавишу, чтобы перейти к
                                        выбору зоны для перевода.
                                    </AboutCard.Paragraph>
                                </>
                            }
                        />
                    </AboutCard>
                </AboutModes.Body>
            </UiDivContainer>
        </UiSectionWrapper>
    );
}

AboutModes.Body = function AboutModesBody({ children }) {
    return (
        <div className="flex flex-col gap-10 min-[1290px]:flex-row min-[1290px]:gap-[1.875rem]">
            {children}
        </div>
    );
};
