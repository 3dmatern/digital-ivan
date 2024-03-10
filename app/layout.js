import { cookies } from "next/headers";
import { Roboto } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";

import { Providers } from "@/components/providers";
import { Navigate } from "@/components/navigate";
import { Footer } from "@/components/footer";

export const dynamic = "force-dynamic";

const roboto = Roboto({
    weight: ["400", "700"],
    subsets: ["cyrillic", "latin"],
    display: "swap",
});

export const metadata = {
    title: "NIKO",
    description:
        "Переводи текст в играх или приложениях в реальном времени c NIKO",
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL),
    alternates: {
        canonical: "/",
    },
};

export default async function RootLayout({ children }) {
    const accessToken = cookies().get("accessToken")?.value;

    return (
        <html lang="ru">
            <body
                className={cn(
                    "pt-[60px] bg-background-second",
                    roboto.className
                )}
            >
                <Providers>
                    <Navigate isAuth={!!accessToken} />
                    {children}
                    <Footer />
                    <div id="modals" />
                </Providers>
            </body>
        </html>
    );
}
