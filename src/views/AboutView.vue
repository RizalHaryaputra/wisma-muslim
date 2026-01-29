<script setup>
import {
    BuildingLibraryIcon,
    UserGroupIcon,
    SparklesIcon,
    CheckBadgeIcon
} from '@heroicons/vue/24/solid' // Menggunakan Solid icon untuk variasi

const stats = [
    { id: 1, name: 'Tahun Pengabdian', value: '20+', sub: 'Sejak 2004' },
    { id: 2, name: 'Lokasi Wisma', value: '15', sub: 'Tersebar di DIY' },
    { id: 3, name: 'Total Alumni', value: '1.5k', sub: 'Tersebar Nasional' },
]

const missions = [
    'Menyediakan hunian islami yang kondusif.',
    'Menyelenggarakan pendidikan diniyah terstruktur.',
    'Membentuk karakter mahasiswa disiplin & mandiri.'
]
</script>

<template>
    <div class="bg-white">

        <div class="relative isolate overflow-hidden pt-14 pb-14 border-b border-slate-100">
            <div
                class="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.blue.50),white)] opacity-20">
            </div>
            <div class="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                <div class="mx-auto max-w-2xl">
                    <span
                        class="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-xs font-bold tracking-wider uppercase mb-4">Profil
                        Kami</span>
                    <h1 class="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl mb-6">Tentang <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Wisma
                        Muslim</span></h1>
                    <p class="text-lg leading-8 text-slate-600">
                        Wadah pembinaan mahasiswa di Yogyakarta di bawah naungan <span
                            class="font-semibold text-blue-600">Yayasan Pendidikan Islam Al-Atsari (YPIA)</span>.
                    </p>
                </div>
            </div>
        </div>

        <div class="py-20 sm:py-24">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <div class="relative order-2 lg:order-1">
                        <div class="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-100">
                            <img src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Kegiatan Wisma"
                                class="w-full object-cover h-[500px] hover:scale-105 transition-transform duration-700">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                            <div class="absolute bottom-8 left-8 text-white">
                                <p class="font-bold text-xl">Kajian Rutin Pekanan</p>
                                <p class="text-sm opacity-90">Masjid Al-Ashri, Pogung</p>
                            </div>
                        </div>
                        <div class="absolute -z-10 -top-4 -left-4 w-24 h-24 bg-dots-pattern opacity-50"></div>
                    </div>

                    <div class="order-1 lg:order-2">
                        <h2 class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
                            Membangun Generasi <span class="text-blue-600">Faqih Fiddin</span>
                        </h2>
                        <div class="space-y-6 text-slate-600 text-lg leading-relaxed">
                            <p>
                                Yogyakarta dikenal sebagai kota pelajar, namun juga memiliki tantangan pergaulan bebas.
                                <strong class="text-slate-900">Wisma Muslim</strong> hadir sebagai solusi bagi orang tua
                                yang ingin putranya tetap terjaga aqidah dan akhlaknya.
                            </p>
                            <p>
                                Bukan sekadar tempat tidur, kami adalah keluarga. Di sini, mahasiswa belajar membagi
                                waktu antara mengejar IPK tinggi di kampus dan mengejar hafalan Al-Qur'an di wisma.
                            </p>
                        </div>

                        <dl class="grid grid-cols-3 gap-8 mt-10 border-t border-slate-100 pt-10">
                            <div v-for="stat in stats" :key="stat.id">
                                <dt class="text-sm font-medium text-slate-500">{{ stat.name }}</dt>
                                <dd class="mt-1 text-3xl font-bold tracking-tight text-blue-600">{{ stat.value }}</dd>
                                <dd class="text-xs text-slate-400">{{ stat.sub }}</dd>
                            </div>
                        </dl>
                    </div>

                </div>
            </div>
        </div>

        <div class="bg-slate-900 py-24 relative overflow-hidden">
            <div class="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
                <div class="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-blue-600 blur-[100px]">
                </div>
                <div class="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] rounded-full bg-cyan-500 blur-[100px]">
                </div>
            </div>

            <div class="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    <div
                        class="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-colors duration-300">
                        <div
                            class="bg-blue-500/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-blue-400">
                            <SparklesIcon class="w-8 h-8" />
                        </div>
                        <h3 class="text-2xl font-bold text-white mb-4">Visi Kami</h3>
                        <p class="text-slate-300 text-lg leading-relaxed">
                            "Menjadi wadah pembinaan mahasiswa muslim yang unggul dalam prestasi akademik, berakhlak
                            mulia, dan beraqidah lurus sesuai pemahaman Salafush Shalih."
                        </p>
                    </div>

                    <div
                        class="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-colors duration-300">
                        <div
                            class="bg-blue-500/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-blue-400">
                            <BuildingLibraryIcon class="w-8 h-8" />
                        </div>
                        <h3 class="text-2xl font-bold text-white mb-4">Misi Kami</h3>
                        <ul class="space-y-4">
                            <li v-for="(misi, index) in missions" :key="index" class="flex items-start gap-3">
                                <CheckBadgeIcon class="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                                <span class="text-slate-300">{{ misi }}</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
/* Pola titik-titik dekoratif */
.bg-dots-pattern {
    background-image: radial-gradient(#3b82f6 2px, transparent 2px);
    background-size: 20px 20px;
}
</style>