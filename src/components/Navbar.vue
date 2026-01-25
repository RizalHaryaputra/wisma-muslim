<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const isOpen = ref(false)

const menuItems = [
    { name: 'Beranda', path: '/' },
    { name: 'Tentang Kami', path: '/about' },
    { name: 'Program', path: '/program' },
    { name: 'Fasilitas', path: '/facility' },
    { name: 'Galeri', path: '/gallery' },
]
</script>

<template>
    <nav
        class="fixed w-full z-50 top-0 transition-all duration-300 backdrop-blur-md bg-white/70 border-b border-gray-200/50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-20">

                <div class="flex-shrink-0 flex items-center gap-2 cursor-pointer" @click="$router.push('/')">
                    <div
                        class="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/30">
                        W
                    </div>
                    <div>
                        <h1 class="text-xl font-bold text-gray-800 tracking-tight">Wisma Muslim</h1>
                        <p class="text-xs text-blue-600 font-medium tracking-wide">YOGYAKARTA</p>
                    </div>
                </div>

                <div class="hidden md:flex space-x-8 items-center">
                    <RouterLink v-for="item in menuItems" :key="item.name" :to="item.path"
                        class="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200"
                        active-class="text-blue-600 font-semibold">
                        {{ item.name }}
                    </RouterLink>

                    <RouterLink to="/join">
                        <button
                            class="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-6 py-2.5 rounded-full text-sm font-medium shadow-lg shadow-blue-500/30 transition-all transform hover:scale-105 active:scale-95">
                            Daftar Sekarang
                        </button>
                    </RouterLink>
                </div>

                <div class="md:hidden flex items-center">
                    <button @click="isOpen = !isOpen" class="text-gray-600 hover:text-blue-600 focus:outline-none">
                        <Bars3Icon v-if="!isOpen" class="h-8 w-8" />
                        <XMarkIcon v-else class="h-8 w-8" />
                    </button>
                </div>
            </div>
        </div>

        <div v-show="isOpen"
            class="md:hidden absolute w-full bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-xl">
            <div class="px-4 pt-2 pb-6 space-y-2">
                <RouterLink v-for="item in menuItems" :key="item.name" :to="item.path" @click="isOpen = false"
                    class="block px-3 py-3 rounded-lg text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all"
                    active-class="bg-blue-50 text-blue-600">
                    {{ item.name }}
                </RouterLink>
                <div class="pt-4">
                    <RouterLink to="/join" @click="isOpen = false">
                        <button class="w-full bg-blue-600 text-white py-3 rounded-xl font-bold shadow-md">
                            Daftar Sekarang
                        </button>
                    </RouterLink>
                </div>
            </div>
        </div>
    </nav>
</template>