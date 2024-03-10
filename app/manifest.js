export default function manifest() {
    return {
        name: "NIKO",
        short_name: "NIKO",
        description:
            "Переводи текст в играх или приложениях в реальном времени c NIKO",
        start_url: "/",
        display: "standalone",
        background_color: "#fff",
        theme_color: "#fff",
        icons: [
            {
                src: "/icon1.png",
                sizes: "192x192",
                type: "image/png",
            },
            {
                src: "/icon2.png",
                sizes: "512x512",
                type: "image/png",
            },
        ],
    };
}
