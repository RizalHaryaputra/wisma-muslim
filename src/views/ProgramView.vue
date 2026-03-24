<script setup>
import {
    BookOpenIcon,
    LanguageIcon,
    ShieldCheckIcon,
    ClockIcon,
    UserGroupIcon,
    HeartIcon
} from '@heroicons/vue/24/outline'

const programs = [
    {
        name: 'Tahsin & Tahfidz Al-Qur\'an',
        description: 'Fokus pada perbaikan makhorijul huruf, tajwid, dan setoran hafalan rutin mingguan bersama musyrif yang kompeten.',
        icon: BookOpenIcon,
        badge: 'Wajib',
        color: 'text-emerald-600',
        bg: 'bg-emerald-50',
        border: 'group-hover:border-emerald-200'
    },
    {
        name: 'Bahasa Arab Dasar',
        description: 'Mempelajari dasar-dasar ilmu Nahwu dan Shorof sebagai bekal utama untuk memahami literatur Islam klasik (Kitab Kuning).',
        icon: LanguageIcon,
        badge: 'Wajib',
        color: 'text-blue-600',
        bg: 'bg-blue-50',
        border: 'group-hover:border-blue-200'
    },
    {
        name: 'Kajian Kitab Tauhid & Fiqih',
        description: 'Pembahasan kitab berjenjang untuk memantapkan aqidah dan tata cara ibadah sehari-hari sesuai sunnah.',
        icon: ShieldCheckIcon,
        badge: 'Wajib',
        color: 'text-purple-600',
        bg: 'bg-purple-50',
        border: 'group-hover:border-purple-200'
    },
]

const schedules = [
    { time: '04:00 - 05:30', title: 'Subuh Berjamaah & Dzikir Pagi', desc: 'Dibiasakan shalat subuh tepat waktu di masjid terdekat dilanjutkan dzikir pagi bersama.' },
    { time: '05:30 - 06:30', title: 'Halaqah Al-Qur\'an / Pagi', desc: 'Setoran hafalan atau perbaikan bacaan (Tahsin) sebelum bersiap ke kampus.' },
    { time: '07:00 - 15:00', title: 'Aktivitas Kampus', desc: 'Waktu bebas untuk kuliah, praktikum, atau berorganisasi di kampus masing-masing.' },
    { time: '16:00 - 17:30', title: 'Kajian Sore / Ekstrakurikuler', desc: 'Kajian kitab ringan, olahraga bersama (futsal/panahan), atau kerja bakti wisma.' },
    { time: '18:00 - 20:00', title: 'Maghrib, Isya & Kelas Diniyah', desc: 'Kelas Bahasa Arab atau Kajian Kitab Tematik ba\'da Maghrib hingga Isya.' },
    { time: '20:00 - 22:00', title: 'Belajar Mandiri & Istirahat', desc: 'Waktu untuk mengerjakan tugas kuliah (nugas) dan istirahat malam.' },
]
</script>

<template>
    <div class="bg-white overflow-hidden">

        <div class="relative isolate pt-14 pb-16 lg:pt-20 lg:pb-24 border-b border-slate-100 overflow-hidden">
            <div class="absolute top-0 right-0 -translate-y-12 translate-x-1/3">
                <div class="w-96 h-96 bg-blue-100/50 rounded-full blur-3xl"></div>
            </div>
            <div class="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3">
                <div class="w-72 h-72 bg-emerald-100/50 rounded-full blur-3xl"></div>
            </div>

            <div class="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
                <div
                    class="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium text-blue-700 bg-blue-50 mb-6 border border-blue-100">
                    <ClockIcon class="w-4 h-4" />
                    <span>Kurikulum & Rutinitas</span>
                </div>
                <h1 class="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl mb-6">
                    Program Pembinaan <span
                        class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Terpadu</span>
                </h1>
                <p class="mx-auto max-w-2xl text-lg leading-8 text-slate-600">
                    Kami merancang kurikulum yang menyeimbangkan antara kesibukan kuliah akademis dengan kewajiban
                    menuntut ilmu syar'i.
                </p>
            </div>
        </div>

        <div class="py-20 bg-slate-50/50">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Kurikulum Diniyah</h2>
                    <p class="mt-4 text-lg text-slate-600">Pilar utama pendidikan agama di Wisma Muslim.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div v-for="program in programs" :key="program.name"
                        class="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 hover:-translate-y-2"
                        :class="program.border">
                        <div class="absolute top-6 right-6">
                            <span
                                class="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-600">
                                {{ program.badge }}
                            </span>
                        </div>

                        <div
                            :class="[program.bg, program.color, 'h-14 w-14 flex items-center justify-center rounded-2xl mb-6 transition-transform group-hover:scale-110 duration-300']">
                            <component :is="program.icon" class="h-7 w-7" aria-hidden="true" />
                        </div>

                        <h3 class="text-xl font-bold text-slate-900 mb-3">{{ program.name }}</h3>
                        <p class="text-slate-600 leading-relaxed">{{ program.description }}</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="py-24 bg-slate-50/50 relative">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">

                    <div class="lg:col-span-5 sticky top-28">
                        <h2 class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
                            Gambaran <br> <span class="text-blue-600">Keseharian Santri</span>
                        </h2>
                        <p class="text-lg text-slate-600 mb-8 leading-relaxed">
                            Disiplin adalah kunci. Rutinitas harian di Wisma Muslim dirancang agar santri bisa maksimal
                            dalam ibadah, namun tetap memiliki waktu luang yang cukup untuk kuliah, mengerjakan tugas,
                            dan beristirahat.
                        </p>
                        <div
                            class="bg-blue-50/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-100 flex gap-4 items-start shadow-sm">
                            <HeartIcon class="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                            <div>
                                <h4 class="font-bold text-slate-900 mb-1">Toleransi Waktu Kuliah</h4>
                                <p class="text-sm text-slate-600 leading-relaxed">
                                    Jadwal diniyah disesuaikan agar tidak bentrok dengan jadwal kuliah reguler. Kuliah
                                    tetap menjadi prioritas utama.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="lg:col-span-7">
                        <div class="space-y-0">
                            <div v-for="(schedule, index) in schedules" :key="index"
                                class="relative flex flex-col sm:flex-row sm:gap-6 group pb-8 sm:pb-12 last:pb-0">

                                <div class="sm:hidden mb-4">
                                    <span
                                        class="inline-flex items-center rounded-lg bg-blue-600 px-3 py-1.5 text-sm font-bold text-white shadow-sm">
                                        {{ schedule.time }}
                                    </span>
                                </div>

                                <div class="hidden sm:block w-32 flex-shrink-0 pt-4 z-20">
                                    <div
                                        class="bg-slate-900 text-white text-center rounded-xl py-2 px-2 text-sm font-bold shadow-md group-hover:bg-blue-600 group-hover:scale-105 group-hover:shadow-blue-500/30 transition-all duration-300">
                                        {{ schedule.time }}
                                    </div>
                                </div>

                                <div class="hidden sm:flex flex-col items-center relative w-6 flex-shrink-0 pt-6">
                                    <div
                                        class="w-4 h-4 rounded-full bg-white border-4 border-slate-200 group-hover:border-blue-500 transition-colors duration-300 z-10 relative">
                                    </div>
                                    <div
                                        class="absolute top-10 bottom-[-48px] w-0.5 bg-slate-200 group-last:hidden group-hover:bg-blue-200 transition-colors duration-300">
                                    </div>
                                </div>

                                <div
                                    class="flex-grow bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 group-hover:shadow-xl group-hover:border-blue-100 group-hover:-translate-y-1 transition-all duration-300">
                                    <h3 class="text-xl font-bold text-slate-900 mb-2">{{ schedule.title }}</h3>
                                    <p class="text-slate-600 leading-relaxed">{{ schedule.desc }}</p>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div class="pb-24 pt-10 bg-white">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div
                    class="bg-slate-900 rounded-3xl p-8 sm:p-12 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10">
                    <div class="absolute -right-20 -top-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>

                    <div class="relative z-10 max-w-2xl text-center lg:text-left">
                        <h3 class="text-2xl sm:text-3xl font-bold text-white mb-4">Kegiatan Ekstrakurikuler & Sosial
                        </h3>
                        <p class="text-slate-300 text-lg">
                            Selain belajar, kami juga rutin mengadakan olahraga bersama (Futsal, Badminton), Rihlah
                            (Jalan-jalan alam), dan Kerja Bakti membersihkan lingkungan wisma & masjid untuk memupuk
                            ukhuwah.
                        </p>
                    </div>

                    <div class="relative z-10 flex-shrink-0">
                        <div class="flex -space-x-4">
                            <img class="w-14 h-14 rounded-full border-4 border-slate-900 object-cover"
                                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                                alt="">
                            <img class="w-14 h-14 rounded-full border-4 border-slate-900 object-cover"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt="">
                            <img class="w-14 h-14 rounded-full border-4 border-slate-900 object-cover"
                                src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt="">
                            <div
                                class="w-14 h-14 rounded-full border-4 border-slate-900 bg-blue-600 flex items-center justify-center text-white font-bold text-sm z-10">
                                +40
                            </div>
                        </div>
                        <p class="text-white text-sm mt-3 text-center font-medium">Keluarga Santri</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>