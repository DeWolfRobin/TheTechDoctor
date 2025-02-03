<template>
  <!-- Hero Section -->
  <section
    id="hero"
    class="h-screen flex flex-col items-center justify-center bg-cover bg-center relative pt-16"
    style="background-image: url('https://picsum.photos/seed/hero/1200/600')"
    data-aos="fade-down"
  >
    <div class="absolute inset-0 bg-black opacity-60"></div>
    <div
      class="relative container mx-auto px-4 h-full flex flex-col justify-center items-center"
    >
      <h1 class="text-5xl md:text-6xl font-bold text-white mb-4">
        {{ businessName }}
      </h1>
      <p
        class="text-lg md:text-xl text-gray-200 max-w-2xl text-center mb-6"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Expert IT Solutions for Your PC. Specializing in PC cleanup,
        virus/malware removal, and file recovery to keep your systems running at
        peak performance.
      </p>
      <a
        href="#about"
        class="bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-700 transition-colors"
        data-aos="zoom-in"
      >
        Learn More
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  businessName: string;
}>();
</script>
