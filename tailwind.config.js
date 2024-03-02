/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,jsx}",
        "./components/**/*.{js,jsx}",
        "./app/**/*.{js,jsx}",
        "./src/**/*.{js,jsx}",
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "1.25rem",
                sm: "2rem",
                lg: "4rem",
                xl: "5rem",
                "2xl": "7.71875rem",
            },
        },
        extend: {
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
            colors: {
                prim: "#3FA6A0",
                "prim-hover": "#218882",
                "prim-active": "#53BAB4",
                "background-first": "#070B22",
                "gray-first": "#333333",
                "gray-third": "#DDDDDD",
                error: "#DB371F",
                "almost-black": "#0E0E0E",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
