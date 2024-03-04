import { Logo } from "@/components/logo";
import { UiLink } from "@/components/uikit/ui-link";

export function Footer() {
    return (
        <FooterWrapper>
            <FooterContainer
                logo={<Logo className="justify-start" />}
                privacy={<UiLink href="#">Политика конфиденциальности</UiLink>}
                rights="Все права защищены, 2024"
            />
        </FooterWrapper>
    );
}

export function FooterWrapper({ children }) {
    return (
        <footer className="w-full h-max bg-background-first">{children}</footer>
    );
}

export function FooterContainer({ logo, privacy, rights }) {
    return (
        <div
            className={`
                container py-14 px-5 flex flex-col gap-4 relative
                md:flex-row md:items-center md:justify-between
                md:py-4
            `}
        >
            {logo}
            {privacy}
            <p
                className={`
                mt-6 pt-6 text-sm text-gray-second border-t border-gray-first
                md:absolute md:top-1/2 md:-translate-y-1/2 md:left-1/2 md:-translate-x-1/2
                md:border-none md:mt-0 md:pt-0
            `}
            >
                {rights}
            </p>
        </div>
    );
}
