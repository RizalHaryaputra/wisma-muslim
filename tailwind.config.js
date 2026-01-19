/** @type {import('tailwindcss').Config} */
export default {
    // 1. Aktifkan dark mode manual (bukan berdasarkan setting laptop user saja)
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // 2. Kita definisikan warna 'brand' custom
                brand: {
                    50: '#eff6ff',
                    100: '#dbeafe',
                    500: '#3b82f6', // Biru Utama (Light Mode)
                    600: '#2563eb', // Biru Hover
                    400: '#60a5fa', // Biru Aksen (Dark Mode)
                },
                dark: {
                    bg: '#0f172a', // Slate 900 (Warna background dark mode yang elegan)
                    surface: '#1e293b', // Slate 800 (Warna card/navbar di dark mode)
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'], // Opsional: Pastikan font terlihat modern
            }
        },
    },
    plugins: [],
}