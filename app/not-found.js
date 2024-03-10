import { BackButton } from "@/components/auth/ui/back-button";

export const metadata = {
    title: "NIKO | Not Found",
    description:
        "Переводи текст в играх или приложениях в реальном времени c NIKO",
};

export default function NotFound() {
    return (
        <div className="w-full h-full flex items-center justify-center flex-col space-y-4 text-white">
            <h2 className="text-3xl font-semibold">404 | Not Found</h2>
            <p>Не удалось найти запрошенный ресурс</p>
            <BackButton
                href={"/"}
                label="Вернуться на главную"
                className="text-white"
            />
        </div>
    );
}
