<template>
  <!-- Fixed Navigation/Header -->
  <header class="fixed w-full top-0 left-0 bg-white shadow z-50">
    <nav class="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
      <div class="text-xl font-bold">{{ businessName }}</div>
      <div class="space-x-6 hidden md:block">
        <a href="#hero" class="hover:text-blue-600">Home</a>
        <a href="#about" class="hover:text-blue-600">About</a>
        <a href="#services" class="hover:text-blue-600">Services</a>
        <a href="#pricing" class="hover:text-blue-600">Pricing</a>
        <a href="#contact" class="hover:text-blue-600">Contact</a>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  businessName: string;
}>();
</script>
