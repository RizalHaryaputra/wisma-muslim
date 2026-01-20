<script setup>
import {
    AcademicCapIcon,
    WifiIcon,
    UserGroupIcon,
    MapPinIcon,
    ArrowRightIcon
} from '@heroicons/vue/24/outline'

const features = [
    {
        name: 'Lingkungan Kondusif',
        description: 'Suasana tenang yang mendukung fokus belajar akademis dan ibadah harian.',
        icon: UserGroupIcon,
        color: 'bg-blue-50 text-blue-600'
    },
    {
        name: 'Program Diniyah',
        description: 'Kurikulum terstruktur: Tahsin, Bahasa Arab, dan Kajian Kitab rutin.',
        icon: AcademicCapIcon,
        color: 'bg-emerald-50 text-emerald-600'
    },
    {
        name: 'Fasilitas Lengkap',
        description: 'Kamar nyaman, WiFi kencang untuk kuliah online, dan dapur bersama.',
        icon: WifiIcon,
        color: 'bg-cyan-50 text-cyan-600'
    },
]
</script>

<template>
    <div class="bg-white overflow-hidden">

        <div class="relative isolate">

            <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                <div
                    class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-200 to-cyan-200 opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]">
                </div>
            </div>

            <div class="mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-24">
                <div class="grid lg:grid-cols-2 gap-12 items-center">

                    <div class="max-w-2xl text-center lg:text-left">
                        <div
                            class="inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold text-blue-600 ring-1 ring-inset ring-blue-600/20 mb-6 bg-blue-50/50 backdrop-blur-sm">
                            <span class="flex h-2 w-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
                            Penerimaan Santri Baru Tahun 2026
                        </div>

                        <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6 leading-tight">
                            Hunian Nyaman, <br>
                            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                                Lingkungan Islami
                            </span>
                        </h1>

                        <p class="mt-4 text-lg leading-8 text-gray-600 mb-8">
                            Wisma Muslim Yogyakarta menyediakan tempat tinggal strategis dekat kampus UGM & UNY dengan
                            kurikulum pembinaan karakter yang syar'i.
                        </p>

                        <div class="flex items-center justify-center lg:justify-start gap-x-6">
                            <RouterLink to="/pendaftaran-faq"
                                class="rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all transform hover:-translate-y-1">
                                Daftar Sekarang
                            </RouterLink>
                            <RouterLink to="/tentang-kami"
                                class="text-sm font-semibold leading-6 text-gray-900 flex items-center gap-2 hover:text-blue-600 transition-colors">
                                Pelajari Lebih Lanjut
                                <ArrowRightIcon class="h-4 w-4" />
                            </RouterLink>
                        </div>
                    </div>

                    <div class="relative lg:ml-auto w-full max-w-lg">
                        <div
                            class="relative rounded-2xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:row-span-4 shadow-2xl">
                            <div class="rounded-xl overflow-hidden bg-white">
                                <img src="https://images.unsplash.com/photo-1612207644086-243779ab1013?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Suasana Wisma"
                                    class="w-full h-100 object-cover opacity-90 hover:opacity-100 transition-opacity duration-500">
                            </div>
                        </div>

                        <div
                            class="absolute -bottom-6 -left-6 bg-white/70 backdrop-blur-md border border-white/50 p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce-slow">
                            <div class="bg-red-100 p-2.5 rounded-xl text-red-600">
                                <MapPinIcon class="h-6 w-6" />
                            </div>
                            <div>
                                <p class="text-xs text-gray-500 font-medium">Lokasi Strategis</p>
                                <p class="text-sm font-bold text-gray-800">5 Menit ke UGM</p>
                            </div>
                        </div>

                        <div
                            class="absolute -top-6 -right-6 bg-white/70 backdrop-blur-md border border-white/50 p-4 rounded-2xl shadow-xl hidden sm:block">
                            <div class="text-center">
                                <p class="text-2xl font-bold text-blue-600">500+</p>
                                <p class="text-xs text-gray-600 font-medium">Alumni Sukses</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div class="py-24 sm:py-32 bg-slate-50 relative">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto max-w-2xl text-center">
                    <h2 class="text-base font-semibold leading-7 text-blue-600">Kenapa Memilih Kami?</h2>
                    <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Lebih Dari Sekadar Tempat Tidur
                    </p>
                    <p class="mt-6 text-lg leading-8 text-gray-600">
                        Kami menggabungkan kenyamanan tempat tinggal modern dengan bimbingan keislaman yang hangat dan
                        bersahabat.
                    </p>
                </div>

                <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        <div v-for="feature in features" :key="feature.name"
                            class="flex flex-col bg-white rounded-3xl p-8 shadow-sm ring-1 ring-gray-200 hover:shadow-lg hover:ring-blue-200 transition-all duration-300">
                            <dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 mb-4">
                                <div :class="[feature.color, 'h-10 w-10 flex items-center justify-center rounded-lg']">
                                    <component :is="feature.icon" class="h-6 w-6" aria-hidden="true" />
                                </div>
                                {{ feature.name }}
                            </dt>
                            <dd class="flex flex-auto flex-col text-base leading-7 text-gray-600">
                                <p class="flex-auto">{{ feature.description }}</p>
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>

        <div class="bg-white">
            <div class="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
                <div
                    class="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">

                    <svg viewBox="0 0 1024 1024"
                        class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                        aria-hidden="true">
                        <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                            fill-opacity="0.7" />
                        <defs>
                            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                                <stop stop-color="#3B82F6" />
                                <stop offset="1" stop-color="#06B6D4" />
                            </radialGradient>
                        </defs>
                    </svg>

                    <div class="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Siap Bergabung?
                            <br />
                            Wujudkan masa muda yang bermanfaat.
                        </h2>
                        <p class="mt-6 text-lg leading-8 text-gray-300">
                            Kuota terbatas setiap tahunnya. Segera daftarkan diri Anda sebelum pendaftaran ditutup.
                        </p>
                        <div class="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                            <RouterLink to="/pendaftaran-faq"
                                class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                                Isi Formulir Pendaftaran
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
/* Animasi lambat untuk floating card */
.animate-bounce-slow {
    animation: bounce 3s infinite;
}

@keyframes bounce {

    0%,
    100% {
        transform: translateY(-5%);
    }

    50% {
        transform: translateY(5%);
    }
}
</style>