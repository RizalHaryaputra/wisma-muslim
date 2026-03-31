<script setup>
import { ref, computed } from 'vue'
import { PhotoIcon, PlayCircleIcon } from '@heroicons/vue/24/outline'

// Kategori Filter
const categories = ['Semua', 'Kajian & Belajar', 'Kebersamaan', 'Fasilitas']
const activeCategory = ref('Semua')

// Data Foto Galeri
const photos = [
    {
        id: 1,
        title: 'Kajian Kitab Tauhid Pagi',
        category: 'Kajian & Belajar',
        image: 'https://images.unsplash.com/photo-1623314359092-c8c528fab644?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        span: 'md:col-span-2 md:row-span-2' // Foto Besar
    },
    {
        id: 2,
        title: 'Rihlah & Outbound',
        category: 'Kebersamaan',
        image: 'https://images.unsplash.com/photo-1560067394-658386023ed3?q=80&w=1329&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        span: 'md:col-span-1 md:row-span-1'
    },
    {
        id: 3,
        title: 'Kerja Bakti Masjid',
        category: 'Kebersamaan',
        image: 'https://images.unsplash.com/photo-1698923824949-de13e96498eb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGNsZWFuJTIwbW9zcXVlfGVufDB8fDB8fHww',
        span: 'md:col-span-1 md:row-span-3' // Foto Memanjang (Potrait)
    },
    {
        id: 4,
        title: 'Suasana Kamar Santri',
        category: 'Fasilitas',
        image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        span: 'md:col-span-1 md:row-span-1'
    },
    {
        id: 5,
        title: 'Kelas Bahasa Arab Dasar',
        category: 'Kajian & Belajar',
        image: 'https://images.unsplash.com/photo-1728484700786-728331faee54?q=80&w=1195&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        span: 'md:col-span-2 md:row-span-1' // Foto Melebar (Landscape)
    },
    {
        id: 6,
        title: 'Olahraga Futsal Pekanan',
        category: 'Kebersamaan',
        image: 'https://images.unsplash.com/photo-1587384474964-3a06ce1ce699?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnV0c2FsfGVufDB8fDB8fHww',
        span: 'md:col-span-1 md:row-span-1'
    },
]

// Logic untuk filter foto
const filteredPhotos = computed(() => {
    if (activeCategory.value === 'Semua') {
        return photos
    }
    return photos.filter(photo => photo.category === activeCategory.value)
})
</script>

<template>
    <div class="bg-white overflow-hidden min-h-screen pb-24">

        <div class="relative isolate pt-14 pb-10 lg:pt-20 lg:pb-16 overflow-hidden">
            <div
                class="absolute inset-x-0 top-0 -z-10 h-[500px] w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/80 via-white to-white">
            </div>

            <div class="mx-auto max-w-7xl px-6 lg:px-8 text-center relative z-10">
                <div
                    class="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium text-blue-700 bg-blue-50 mb-6 border border-blue-100 shadow-sm">
                    <PhotoIcon class="w-4 h-4" />
                    <span>Momen & Kenangan</span>
                </div>
                <h1 class="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl mb-6">
                    Galeri <span
                        class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">Kegiatan</span>
                </h1>
                <p class="mx-auto max-w-2xl text-lg leading-8 text-slate-600">
                    Mengintip lebih dekat bagaimana hangatnya persaudaraan dan semangat menuntut ilmu di lingkungan
                    Wisma Muslim.
                </p>
            </div>
        </div>

        <div class="mx-auto max-w-7xl px-6 lg:px-8 mb-12">
            <div class="flex flex-wrap justify-center gap-3">
                <button v-for="cat in categories" :key="cat" @click="activeCategory = cat" :class="[
                    'px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 shadow-sm',
                    activeCategory === cat
                        ? 'bg-slate-900 text-white shadow-slate-900/30 scale-105'
                        : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:text-blue-600'
                ]">
                    {{ cat }}
                </button>
            </div>
        </div>

        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <transition-group name="gallery" tag="div"
                class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 auto-rows-[250px]">
                <div v-for="photo in filteredPhotos" :key="photo.id" :class="[
                    photo.span,
                    'group relative rounded-3xl overflow-hidden bg-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer border border-slate-100'
                ]">
                    <img :src="photo.image" :alt="photo.title"
                        class="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700">

                    <div
                        class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    </div>

                    <div
                        class="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <span
                            class="inline-block w-fit px-3 py-1 mb-3 rounded-full bg-blue-500/80 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider">
                            {{ photo.category }}
                        </span>
                        <h3 class="text-xl sm:text-2xl font-bold text-white leading-tight">
                            {{ photo.title }}
                        </h3>
                    </div>
                </div>
            </transition-group>

            <div v-if="filteredPhotos.length === 0" class="text-center py-20">
                <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 mb-4">
                    <PhotoIcon class="w-8 h-8 text-slate-400" />
                </div>
                <h3 class="text-lg font-bold text-slate-900">Belum ada foto</h3>
                <p class="text-slate-500">Foto untuk kategori ini akan segera ditambahkan.</p>
            </div>
        </div>

        <div class="mx-auto max-w-7xl px-6 lg:px-8 mt-24">
            <div class="relative rounded-[2.5rem] overflow-hidden bg-slate-900 p-8 sm:p-16 text-center isolate">
                <div
                    class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/30 rounded-full blur-[100px] -z-10">
                </div>

                <PlayCircleIcon
                    class="w-16 h-16 text-white/80 mx-auto mb-6 hover:text-white transition-colors cursor-pointer hover:scale-110 duration-300" />
                <h2 class="text-2xl sm:text-4xl font-bold text-white mb-4 tracking-tight">Tonton Video Profil Kami</h2>
                <p class="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
                    Lihat lebih dekat bagaimana keseharian santri dan penjelasan langsung dari para musyrif Wisma
                    Muslim.
                </p>
                <button
                    class="bg-white text-slate-900 font-bold px-8 py-3.5 rounded-xl hover:bg-blue-50 transition-colors shadow-lg hover:scale-105 duration-300">
                    Lihat di YouTube
                </button>
            </div>
        </div>

    </div>
</template>

<style scoped>
/* Animasi transisi untuk filter Grid */
.gallery-enter-active,
.gallery-leave-active {
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.gallery-enter-from,
.gallery-leave-to {
    opacity: 0;
    transform: scale(0.9) translateY(20px);
}

.gallery-leave-active {
    position: absolute;
}
</style>