import { Roboto } from "next/font/google";
import "./globals.css";

import { auth } from "@/auth";
import { cn } from "@/lib/utils";

import { Navigate } from "@/components/navigate";
import { Footer } from "@/components/footer";
import { Providers } from "@/components/Providers";

export const dynamic = "force-dynamic";

const roboto = Roboto({
    weight: ["400", "700"],
    subsets: ["cyrillic", "latin"],
    display: "swap",
});

export const metadata = {
    title: "NIKO",
    description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
    const session = await auth();
    console.log("RootLayout: ", session);

    return (
        <html lang="ru">
            <body
                className={cn(
                    "pt-[60px] bg-background-second",
                    roboto.className
                )}
            >
                <Providers>
                    <Navigate />
                    {children}
                    <Footer />
                    <div id="modals" />
                </Providers>
            </body>
        </html>
    );
}
