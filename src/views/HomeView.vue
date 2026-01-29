<script setup>
import {
    AcademicCapIcon,
    WifiIcon,
    UserGroupIcon,
    MapPinIcon,
    SparklesIcon,
    ArrowRightIcon
} from '@heroicons/vue/24/outline'

const features = [
    {
        name: 'Lingkungan Kondusif',
        description: 'Circle pertemanan yang saling mengingatkan dalam kebaikan, jauh dari hingar bingar negatif.',
        icon: UserGroupIcon,
        bg: 'bg-blue-50',
        text: 'text-blue-600',
        border: 'group-hover:border-blue-200'
    },
    {
        name: 'Kurikulum Diniyah',
        description: 'Seimbangkan kuliahmu dengan ilmu syari: Tahsin, Bahasa Arab, dan Kajian Kitab rutin.',
        icon: AcademicCapIcon,
        bg: 'bg-emerald-50',
        text: 'text-emerald-600',
        border: 'group-hover:border-emerald-200'
    },
    {
        name: 'Fasilitas Premium',
        description: 'Kamar full-furnished, AC/Non-AC, High-speed WiFi, dan dapur bersama yang bersih.',
        icon: WifiIcon,
        bg: 'bg-purple-50',
        text: 'text-purple-600',
        border: 'group-hover:border-purple-200'
    },
]
</script>

<template>
    <div class="bg-white overflow-hidden selection:bg-blue-100 selection:text-blue-900">

        <div class="relative isolate pt-14 pb-20 lg:pt-20 lg:pb-28">

            <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-200 to-cyan-200 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
                </div>
            </div>

            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="grid lg:grid-cols-2 gap-16 items-center">

                    <div class="max-w-2xl text-center lg:text-left pt-10 lg:pt-0">
                        <!-- <div
                            class="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 mb-8 bg-blue-50/50 backdrop-blur-sm shadow-sm hover:bg-blue-100 transition-colors cursor-default">
                            <SparklesIcon class="w-4 h-4 text-blue-600" />
                            <span>Penerimaan Santri Baru 2026 Dibuka</span>
                        </div> -->

                        <h1
                            class="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-7xl mb-6 leading-[1.1]">
                            Hunian Nyaman, <br>
                            <span
                                class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-400">
                                Lingkungan Islami.
                            </span>
                        </h1>

                        <p class="mt-6 text-lg leading-8 text-slate-600 mb-10 font-light">
                            Lebih dari sekadar kost. Ini adalah ekosistem bagi mahasiswa yang ingin unggul dalam <strong
                                class="text-slate-900 font-semibold">akademik</strong> dan kokoh dalam <strong
                                class="text-slate-900 font-semibold">agama</strong>.
                        </p>

                        <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <RouterLink to="/pendaftaran-faq"
                                class="w-full sm:w-auto rounded-xl bg-blue-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-blue-500/30 hover:bg-blue-500 hover:shadow-blue-500/50 hover:-translate-y-1 transition-all duration-300 flex justify-center items-center gap-2">
                                Daftar Sekarang
                            </RouterLink>
                            <RouterLink to="/tentang-kami"
                                class="w-full sm:w-auto rounded-xl px-8 py-4 text-sm font-bold text-slate-700 hover:bg-slate-50 hover:text-blue-600 border border-slate-200 hover:border-blue-200 transition-all duration-300 flex justify-center items-center gap-2 group">
                                Pelajari Program
                                <ArrowRightIcon class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </RouterLink>
                        </div>
                    </div>

                    <div class="relative lg:ml-auto w-full max-w-lg perspective-1000">
                        <div
                            class="relative rounded-3xl bg-slate-900/5 p-3 ring-1 ring-inset ring-slate-900/10 shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-500 group">
                            <div class="rounded-2xl overflow-hidden bg-white aspect-[4/5] sm:aspect-[4/3] relative">
                                <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
                                <img src="https://images.unsplash.com/photo-1573919900573-33f075249e97?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjMyfHx8ZW58MHx8fHx8"
                                    alt="Mahasiswa Belajar"
                                    class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700">

                                <!-- <div class="absolute bottom-6 left-6 z-20 text-white">
                                    <p class="text-sm font-medium text-blue-200 mb-1">Lokasi Premium</p>
                                    <p class="text-xl font-bold">Pogung & Sekitar UGM</p>
                                </div> -->
                            </div>
                        </div>

                        <div
                            class="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur-xl border border-white/20 p-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center gap-4 animate-float">
                            <div class="bg-red-50 p-3 rounded-xl text-red-500">
                                <MapPinIcon class="h-6 w-6" />
                            </div>
                            <div>
                                <p class="text-xs text-slate-500 font-bold uppercase tracking-wider">Jarak Tempuh</p>
                                <p class="text-base font-bold text-slate-800">5 Menit ke Kampus</p>
                            </div>
                        </div>

                        <div
                            class="absolute -top-6 -right-6 bg-white/90 backdrop-blur-xl border border-white/20 p-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hidden sm:block animate-float-delayed">
                            <div class="text-center">
                                <p
                                    class="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                                    500+</p>
                                <p class="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">Alumni Sukses
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div class="py-24 bg-slate-50/50 relative">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="text-center max-w-2xl mx-auto mb-16">
                    <h2 class="text-base font-bold tracking-wide text-blue-600 uppercase">Kenapa Harus Disini?</h2>
                    <p class="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        Upgrade Kualitas Hidup Mahasiswa
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div v-for="feature in features" :key="feature.name"
                        class="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 border border-slate-100 transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                        :class="feature.border">
                        <div class="absolute -right-10 -top-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl"
                            :class="feature.bg.replace('bg-', 'bg-')"></div>

                        <div class="relative z-10">
                            <div
                                :class="[feature.bg, feature.text, 'h-14 w-14 flex items-center justify-center rounded-2xl mb-6 transition-transform group-hover:scale-110 duration-300']">
                                <component :is="feature.icon" class="h-7 w-7" aria-hidden="true" />
                            </div>
                            <h3 class="text-xl font-bold text-slate-900 mb-3">{{ feature.name }}</h3>
                            <p class="text-slate-600 leading-relaxed">{{ feature.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="relative py-24 overflow-hidden">
            <div class="absolute inset-0 bg-slate-900"></div>
            <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            <div
                class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/30 blur-[120px] rounded-full">
            </div>

            <div class="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
                <h2 class="text-3xl font-bold tracking-tight text-white sm:text-5xl mb-6">
                    Mulai Perjalanan Hijrahmu Disini
                </h2>
                <p class="mx-auto max-w-xl text-lg text-blue-100 mb-10">
                    Bergabunglah dengan ratusan mahasiswa lainnya yang memilih tumbuh di lingkungan yang menjaga iman
                    dan imun.
                </p>
                <div class="flex items-center justify-center gap-x-6">
                    <RouterLink to="/pendaftaran-faq"
                        class="rounded-xl bg-white px-8 py-3.5 text-base font-bold text-slate-900 shadow-xl hover:bg-blue-50 transition-all hover:scale-105">
                        Booking Kamar Sekarang
                    </RouterLink>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
.animate-float {
    animation: float 6s ease-in-out infinite;
}

.animate-float-delayed {
    animation: float 6s ease-in-out infinite;
    animation-delay: 3s;
}

@keyframes float {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-15px);
    }
}

.perspective-1000 {
    perspective: 1000px;
}
</style>