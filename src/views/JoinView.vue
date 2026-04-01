<script setup>
import { ref } from 'vue'
import {
    DocumentTextIcon,
    UserGroupIcon,
    CheckBadgeIcon,
    MegaphoneIcon,
    ChevronDownIcon,
    ChatBubbleLeftRightIcon
} from '@heroicons/vue/24/outline'

// Data Alur Pendaftaran
const steps = [
    {
        id: 1,
        name: 'Isi Formulir Online',
        description: 'Mengisi data diri, jalur pendaftaran, dan mengunggah berkas persyaratan melalui link form yang disediakan.',
        icon: DocumentTextIcon,
    },
    {
        id: 2,
        name: 'Seleksi Berkas',
        description: 'Tim kami akan memverifikasi kelengkapan berkas dan kesesuaian kriteria pendaftar (1-3 hari kerja).',
        icon: UserGroupIcon,
    },
    {
        id: 3,
        name: 'Tes & Wawancara',
        description: 'Tes baca Al-Qur\'an dasar dan wawancara komitmen (dilakukan secara online/offline).',
        icon: ChatBubbleLeftRightIcon,
    },
    {
        id: 4,
        name: 'Pengumuman',
        description: 'Hasil seleksi akan diumumkan melalui WhatsApp dan Email resmi Wisma Muslim.',
        icon: MegaphoneIcon,
    },
]

// Data FAQ (Perhatikan penambahan properti isOpen)
const faqs = ref([
    {
        question: 'Berapa biaya per bulan di Wisma Muslim?',
        answer: 'Biaya bervariasi tergantung tipe wisma (Kamar Mandi Dalam/Luar, AC/Non-AC). Rata-rata berkisar antara Rp 500.000 - Rp 800.000 per bulan (sudah termasuk fasilitas wifi, air, listrik dasar, dan program pendidikan). Pembayaran biasanya dilakukan per 6 bulan atau 1 tahun.',
        isOpen: false,
    },
    {
        question: 'Apakah boleh membawa kendaraan bermotor?',
        answer: 'Boleh. Kami menyediakan area parkir motor yang aman di setiap wisma. Namun, untuk mobil saat ini fasilitas parkirnya masih sangat terbatas dan harus dikonfirmasikan terlebih dahulu.',
        isOpen: false,
    },
    {
        question: 'Apakah ada jam malam?',
        answer: 'Ya, demi kedisiplinan dan keamanan, gerbang utama akan dikunci pada pukul 22.00 WIB. Jika ada keperluan mendesak/kegiatan kampus yang melebihi jam tersebut, santri wajib melapor kepada musyrif/pengurus wisma.',
        isOpen: false,
    },
    {
        question: 'Saya belum lancar membaca Al-Qur\'an, apakah boleh mendaftar?',
        answer: 'Sangat boleh! Justru di sinilah tempat untuk belajar. Kami memiliki program Tahsin (perbaikan bacaan) dari tingkat paling dasar (Nol) hingga tingkat lanjutan.',
        isOpen: false,
    },
    {
        question: 'Siapa saja yang boleh mendaftar?',
        answer: 'Terbuka untuk seluruh mahasiswa muslim aktif (S1/D3/D4) dari berbagai kampus di Yogyakarta yang bertekad kuat untuk belajar ilmu agama dan mematuhi tata tertib wisma.',
        isOpen: false,
    },
])

// Fungsi untuk membuka/menutup FAQ
const toggleFaq = (index) => {
    faqs.value[index].isOpen = !faqs.value[index].isOpen
}
</script>

<template>
    <div class="bg-white overflow-hidden pb-24">

        <div class="relative isolate pt-14 pb-16 lg:pt-20 lg:pb-24 border-b border-slate-100 overflow-hidden">
            <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                <div
                    class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-100 to-blue-50 opacity-50 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]">
                </div>
            </div>

            <div class="mx-auto max-w-7xl px-6 lg:px-8 text-center relative z-10">
                <div
                    class="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium text-blue-700 bg-blue-50 mb-6 border border-blue-100 shadow-sm">
                    <CheckBadgeIcon class="w-5 h-5" />
                    <span>Penerimaan Santri Baru 2026</span>
                </div>
                <h1 class="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl mb-6">
                    Bergabung Menjadi <br>
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Keluarga
                        Kami</span>
                </h1>
                <p class="mx-auto max-w-2xl text-lg leading-8 text-slate-600">
                    Langkah mudah untuk memulai perjalanan berhargamu di Yogyakarta. Simak alur pendaftaran dan pelajari
                    persyaratannya di bawah ini.
                </p>
            </div>
        </div>

        <div class="py-20 bg-slate-50/50">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Alur Pendaftaran</h2>
                    <p class="mt-4 text-lg text-slate-600">4 langkah mudah untuk menjadi bagian dari Wisma Muslim.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    <div class="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-slate-200 z-0"></div>

                    <div v-for="step in steps" :key="step.id" class="relative z-10 text-center group">
                        <div
                            class="mx-auto w-24 h-24 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:-translate-y-2 group-hover:shadow-lg group-hover:border-blue-200 transition-all duration-300 relative">
                            <div
                                class="absolute -top-3 -right-3 w-8 h-8 bg-blue-600 text-white font-bold rounded-full flex items-center justify-center border-4 border-slate-50 shadow-sm">
                                {{ step.id }}
                            </div>
                            <component :is="step.icon" class="w-10 h-10 text-blue-600" />
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">{{ step.name }}</h3>
                        <p class="text-slate-600 text-sm leading-relaxed px-2">{{ step.description }}</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="py-24 bg-white">
            <div class="mx-auto max-w-4xl px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Pertanyaan Sering Ditanya
                    </h2>
                    <p class="mt-4 text-lg text-slate-600">Temukan jawaban cepat untuk pertanyaan yang sering diajukan
                        calon santri.</p>
                </div>

                <div class="space-y-4">
                    <div v-for="(faq, index) in faqs" :key="index"
                        class="border rounded-2xl overflow-hidden transition-colors duration-300"
                        :class="faq.isOpen ? 'border-blue-500 bg-blue-50/30' : 'border-slate-200 bg-white hover:border-blue-300'">
                        <button @click="toggleFaq(index)"
                            class="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none">
                            <span class="text-lg font-bold text-slate-900 pr-4">{{ faq.question }}</span>
                            <div class="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300"
                                :class="faq.isOpen ? 'bg-blue-600 text-white rotate-180' : 'bg-slate-100 text-slate-500'">
                                <ChevronDownIcon class="w-5 h-5" />
                            </div>
                        </button>

                        <transition enter-active-class="transition duration-300 ease-out"
                            enter-from-class="transform scale-95 opacity-0 -translate-y-4"
                            enter-to-class="transform scale-100 opacity-100 translate-y-0"
                            leave-active-class="transition duration-200 ease-in"
                            leave-from-class="transform scale-100 opacity-100 translate-y-0"
                            leave-to-class="transform scale-95 opacity-0 -translate-y-4">
                            <div v-show="faq.isOpen" class="px-6 pb-6 pt-2">
                                <p class="text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                                    {{ faq.answer }}
                                </p>
                            </div>
                        </transition>
                    </div>
                </div>

            </div>
        </div>

        <div class="mx-auto max-w-5xl px-6 lg:px-8 mt-10">
            <div
                class="relative isolate overflow-hidden bg-slate-900 rounded-[2.5rem] px-6 py-16 sm:px-16 md:py-20 lg:flex lg:items-center lg:gap-x-20 shadow-2xl">
                <div class="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/40 blur-[100px] rounded-full z-0"></div>
                <div class="absolute -bottom-24 -left-24 w-72 h-72 bg-cyan-500/40 blur-[100px] rounded-full z-0"></div>

                <div class="relative z-10 max-w-lg mx-auto lg:mx-0 text-center lg:text-left flex-auto">
                    <h2 class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl mb-4">
                        Siap untuk mendaftar?
                    </h2>
                    <p class="text-lg leading-8 text-blue-100 mb-8">
                        Siapkan berkas-berkas pendukung (KTP, KTM/Bukti Diterima Kampus, Pas Foto) dan isi formulir
                        pendaftaran sekarang.
                    </p>
                    <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                        <a href="#"
                            class="w-full sm:w-auto rounded-xl bg-white px-8 py-4 text-sm font-bold text-blue-600 shadow-xl shadow-white/10 hover:bg-blue-50 hover:scale-105 transition-all duration-300 text-center">
                            Isi Formulir Sekarang
                        </a>
                        <a href="#"
                            class="w-full sm:w-auto rounded-xl bg-transparent border-2 border-slate-600 px-8 py-4 text-sm font-bold text-white hover:border-white hover:bg-white/5 transition-all duration-300 text-center">
                            Tanya Admin (WA)
                        </a>
                    </div>
                </div>

                <div class="relative z-10 hidden lg:block mt-16 lg:mt-0 flex-shrink-0">
                    <div
                        class="w-64 h-64 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-3xl rotate-6 flex items-center justify-center shadow-[0_0_50px_rgba(59,130,246,0.3)]">
                        <DocumentTextIcon class="w-32 h-32 text-white/80" />
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>