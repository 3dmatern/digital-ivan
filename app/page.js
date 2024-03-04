import {
    HomeHead,
    HomeDifference,
    HomeWork,
    HomeFree,
} from "@/components/home";
import { Footer } from "@/components/footer";

export default function HomePage() {
    return (
        // <main className="flex min-h-screen flex-col items-center justify-between p-24 transition-colors">
        <main className="w-full flex flex-col items-center justify-between transition-colors">
            <HomeHead />
            <HomeDifference />
            <HomeWork />
            <HomeFree />
            <Footer />
        </main>
    );
}
