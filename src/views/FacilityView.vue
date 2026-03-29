<script setup>
import {
    WifiIcon,
    BookOpenIcon,
    HomeIcon,
    MapPinIcon,
    SparklesIcon,
    ShieldCheckIcon,
    FireIcon
} from '@heroicons/vue/24/outline'

const facilities = [
    {
        name: 'Kamar Nyaman & Full Furnished',
        description: 'Tersedia pilihan AC & Non-AC. Dilengkapi kasur springbed, lemari pakaian, dan meja belajar eksklusif untuk setiap santri.',
        icon: HomeIcon,
        image: 'https://images.unsplash.com/photo-1628746234641-28eb583a51b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA0fHxiZWRyb29tfGVufDB8fDB8fHww',
        span: 'md:col-span-2 md:row-span-2', // Ukuran besar
        color: 'text-blue-600',
        bg: 'bg-blue-50'
    },
    {
        name: 'High-Speed WiFi',
        description: 'Koneksi internet stabil 24 jam non-stop untuk mendukung kuliah online, nugas, dan streaming kajian.',
        icon: WifiIcon,
        span: 'md:col-span-1 md:row-span-1', // Ukuran kecil
        color: 'text-emerald-600',
        bg: 'bg-emerald-50'
    },
    {
        name: 'Ruang Belajar & Perpustakaan',
        description: 'Area tenang dengan koleksi kitab kuning dan buku literatur Islam.',
        icon: BookOpenIcon,
        span: 'md:col-span-1 md:row-span-1',
        color: 'text-purple-600',
        bg: 'bg-purple-50'
    },
    {
        name: 'Dapur Bersama',
        description: 'Fasilitas kompor, kulkas, dan dispenser yang rutin dibersihkan. Bisa masak sendiri untuk hemat biaya bulanan.',
        icon: FireIcon,
        image: 'https://images.unsplash.com/photo-1668910231038-e342ad670789?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        span: 'md:col-span-2 md:row-span-1', // Ukuran lebar
        color: 'text-orange-600',
        bg: 'bg-orange-50'
    },
]

const locations = [
    {
        name: 'Wisma Muslim Pogung (Pusat)',
        address: 'Pogung Dalangan, SIA XVI, Sinduadi, Mlati, Sleman',
        distance: '5 Menit ke UGM (Teknik, FKKMK, MIPA)',
        type: 'Putra',
        mapsUrl: '#'
    },
    {
        name: 'Wisma Muslim Sendowo',
        address: 'Sendowo Blok C, Sinduadi, Mlati, Sleman',
        distance: '3 Menit ke RS Sardjito & UGM',
        type: 'Putra',
        mapsUrl: '#'
    },
    {
        name: 'Wisma Muslim Karanggayam',
        address: 'Karanggayam, Caturtunggal, Depok, Sleman',
        distance: '10 Menit ke UNY & UGM',
        type: 'Putra',
        mapsUrl: '#'
    }
]
</script>

<template>
    <div class="bg-white overflow-hidden pb-24">

        <div class="relative isolate pt-14 pb-16 lg:pt-20 lg:pb-24 overflow-hidden">
            <div
                class="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-white">
            </div>

            <div class="mx-auto max-w-7xl px-6 lg:px-8 text-center relative z-10">
                <div
                    class="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium text-emerald-700 bg-emerald-50 mb-6 border border-emerald-100 shadow-sm">
                    <SparklesIcon class="w-4 h-4" />
                    <span>Fasilitas Premium</span>
                </div>
                <h1 class="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl mb-6">
                    Kenyamanan yang Mendukung <br>
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Ibadah &
                        Akademis</span>
                </h1>
                <p class="mx-auto max-w-2xl text-lg leading-8 text-slate-600">
                    Setiap sudut Wisma Muslim didesain untuk memastikan Anda bisa beristirahat dengan tenang, fokus
                    belajar, dan beribadah dengan khusyuk.
                </p>
            </div>
        </div>

        <div class="mx-auto max-w-7xl px-6 lg:px-8 mb-32">
            <div class="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 auto-rows-[250px]">

                <div v-for="facility in facilities" :key="facility.name"
                    :class="[facility.span, 'group relative rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 bg-white hover:-translate-y-1']">
                    <template v-if="facility.image">
                        <img :src="facility.image" :alt="facility.name"
                            class="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700">
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent">
                        </div>
                        <div class="absolute bottom-0 left-0 p-8">
                            <div
                                class="bg-white/20 backdrop-blur-md w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4 border border-white/20">
                                <component :is="facility.icon" class="h-6 w-6" aria-hidden="true" />
                            </div>
                            <h3 class="text-2xl font-bold text-white mb-2">{{ facility.name }}</h3>
                            <p class="text-slate-200 text-sm leading-relaxed max-w-md">{{ facility.description }}</p>
                        </div>
                    </template>

                    <template v-else>
                        <div class="absolute inset-0 bg-gradient-to-br from-white to-slate-50 opacity-50"></div>
                        <div class="relative h-full p-8 flex flex-col justify-between">
                            <div
                                :class="[facility.bg, facility.color, 'w-14 h-14 flex items-center justify-center rounded-2xl transition-transform group-hover:scale-110 duration-300']">
                                <component :is="facility.icon" class="h-7 w-7" aria-hidden="true" />
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-slate-900 mb-3">{{ facility.name }}</h3>
                                <p class="text-slate-600 text-sm leading-relaxed">{{ facility.description }}</p>
                            </div>
                        </div>
                    </template>
                </div>

            </div>
        </div>

        <div class="bg-slate-900 py-24 relative overflow-hidden rounded-[3rem] mx-4 sm:mx-6 lg:mx-8">
            <div
                class="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl">
            </div>

            <div class="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
                <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div class="max-w-2xl">
                        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">Lokasi Strategis</h2>
                        <p class="text-blue-100 text-lg">Wisma kami tersebar di berbagai titik strategis yang sangat
                            dekat
                            dengan kampus-kampus besar di Yogyakarta.</p>
                    </div>
                    <ShieldCheckIcon class="w-16 h-16 text-blue-500/50 hidden md:block" />
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div v-for="location in locations" :key="location.name"
                        class="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group">
                        <div class="flex justify-between items-start mb-6">
                            <div class="bg-blue-500/20 text-blue-400 p-3 rounded-xl">
                                <MapPinIcon class="w-6 h-6" />
                            </div>
                            <span
                                class="bg-emerald-500/20 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                {{ location.type }}
                            </span>
                        </div>

                        <h3 class="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{{
                            location.name }}</h3>
                        <p class="text-slate-400 text-sm mb-4 min-h-[40px]">{{ location.address }}</p>

                        <div class="border-t border-white/10 pt-4 mt-auto">
                            <p class="text-sm font-medium text-blue-200 mb-4 flex items-center gap-2">
                                <span class="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                                {{ location.distance }}
                            </p>
                            <a :href="location.mapsUrl" target="_blank"
                                class="block w-full text-center bg-white text-slate-900 font-bold text-sm py-2.5 rounded-xl hover:bg-blue-50 transition-colors">
                                Buka di Maps
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>