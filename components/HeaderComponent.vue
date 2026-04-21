<template>
  <!-- Fixed Navigation/Header -->
  <header
    class="fixed w-full top-0 left-0 bg-white bg-opacity-80 backdrop-blur-sm shadow z-50"
  >
    <nav class="max-w-6xl mx-auto flex items-center justify-between h-16 px-6">
      <!-- Wrap the business name in an anchor so the entire area is clickable -->
      <a href="#hero" class="text-2xl font-bold text-blue-600">
        {{ businessName }}
      </a>
      <div class="hidden md:flex space-x-4">
        <a
          href="#hero"
          class="flex items-center h-16 px-6 text-blue-600 border-b-4 border-transparent hover:border-blue-600 transition-all duration-300"
        >
          Start
        </a>
        <a
          href="#services"
          class="flex items-center h-16 px-6 text-blue-600 border-b-4 border-transparent hover:border-blue-600 transition-all duration-300"
        >
          Diensten
        </a>
        <a
          href="#about"
          class="flex items-center h-16 px-6 text-blue-600 border-b-4 border-transparent hover:border-blue-600 transition-all duration-300"
        >
          Over ons
        </a>
        <a
          href="#pricing"
          class="flex items-center h-16 px-6 text-blue-600 border-b-4 border-transparent hover:border-blue-600 transition-all duration-300"
        >
          Prijzen
        </a>
        <a
          href="#contact"
          class="flex items-center h-16 px-6 text-blue-600 border-b-4 border-transparent hover:border-blue-600 transition-all duration-300"
        >
          Contact
        </a>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  businessName: string;
}>();
</script>
