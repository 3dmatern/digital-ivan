import { cn } from "@/lib/utils";

import { MainCard } from "@/components/home/ui/main-card";
import { UiHeadingThird } from "@/components/uikit/heading/ui-heading-third";

export function WorkList({ className, items }) {
    const getContents = (contents) => {
        return (
            <>
                {contents?.slice(0, 1).map((item) => (
                    <WorkListItem key={item.id} variant="first" number={1}>
                        <MainCard className="md:max-w-full">
                            <MainCard.Body
                                title={
                                    <UiHeadingThird>
                                        {item.title}
                                    </UiHeadingThird>
                                }
                                description={item.description}
                            />
                        </MainCard>
                    </WorkListItem>
                ))}
                {contents?.slice(1, contents.length - 1).map((item, index) => (
                    <WorkListItem
                        key={item.id}
                        variant="center"
                        number={index + 2}
                    >
                        <MainCard className="md:max-w-full">
                            <MainCard.Body
                                title={
                                    <UiHeadingThird>
                                        {item.title}
                                    </UiHeadingThird>
                                }
                                description={item.description}
                            />
                        </MainCard>
                    </WorkListItem>
                ))}
                {contents?.slice(contents.length - 1).map((item) => (
                    <WorkListItem
                        key={item.id}
                        variant="last"
                        number={contents.length}
                    >
                        <MainCard className="md:max-w-full">
                            <MainCard.Body
                                title={
                                    <UiHeadingThird>
                                        {item.title}
                                    </UiHeadingThird>
                                }
                                description={item.description}
                            />
                        </MainCard>
                    </WorkListItem>
                ))}
            </>
        );
    };

    return (
        <WorkListContainer className={className}>
            {getContents(items)}
        </WorkListContainer>
    );
}

function WorkListContainer({ className, children }) {
    return (
        <ul
            className={cn(
                `
                    max-w-[34.3125rem] flex flex-col gap-8 text-white pl-16 md:pl-20
                `,
                className
            )}
        >
            {children}
        </ul>
    );
}

function WorkListItem({ variant, number, children }) {
    return (
        <li
            className={cn(
                `
                    relative z-0
                    before:content-[''] before:block before:w-1 before:h-full before:bg-prim 
                    before:absolute before:-left-[2.875rem]
                `,
                {
                    first: "before:top-1/2",
                    center: "z-10 before:h-[calc(100%+2rem)] before:top-0",
                    last: "before:bottom-1/2",
                }[variant]
            )}
        >
            <span
                className="text-2xl font-bold flex 
                    items-center justify-center size-10 rounded-full
                    bg-prim absolute top-1/2 -translate-y-1/2 
                    -left-[4rem]"
            >
                {number}
            </span>
            {children}
        </li>
    );
}
