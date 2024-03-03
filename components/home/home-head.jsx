import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

export function HomeHead({ className }) {
    return (
        <HomeHeadWrapper>
            <HomeHeadContainer
                button={
                    <Button type="button" className="w-max">
                        Регистрация
                    </Button>
                }
            />
        </HomeHeadWrapper>
    );
}

function HomeHeadWrapper({ className, children }) {
    return (
        <section
            className={cn(
                `
                    w-full h-max 
                    bg-[linear-gradient(to_bottom,rgba(7,11,34,0),rgba(7,11,34,1)),url('/main-bg-head.png')]
                    bg-no-repeat bg-[top_left_-5.0625rem] bg-[length:628px]
                    sm:bg-top-center min-[550px]:bg-[top_left_0rem] sm:bg-[length:100%]
                `,
                className
            )}
        >
            {children}
        </section>
    );
}

function HomeHeadContainer({ className, button }) {
    return (
        <div
            className={cn(
                `
                    container flex flex-col gap-8
                    pt-[317px] px-5 pb-[52px]
                `,
                className
            )}
        >
            <h1
                className={`
                    max-w-[335px] text-[32px] leading-[41.6px] text-white font-bold
                    min-[450px]:max-w-[502.5px] sm:text-[48px] sm:leading-[62.4px]
                    md:max-w-[770px] md:text-[64px] md:leading-[83.2px]
                `}
            >
                Переводи текст <br /> в играх или приложениях в реальном времени
            </h1>
            {button}
        </div>
    );
}
