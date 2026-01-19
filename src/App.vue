<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen bg-gray-50 font-sans">
    <Navbar />
    
    <main class="flex-grow pt-20"> 
      <RouterView />
    </main>

    <Footer />
  </div>
</template>