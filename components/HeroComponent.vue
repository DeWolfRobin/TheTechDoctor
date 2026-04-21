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
      <h1 class="text-7xl md:text-8xl font-bold text-white mb-4">
        {{ businessName }}
      </h1>
      <p
        class="text-xl md:text-2xl text-gray-200 max-w-3xl text-center mb-6"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Uw digitale zorgen, onze zorg! Wij verwijderen virussen en malware,
        herstellen verloren data van uw Android, iOS, pc's, laptops, en zelfs
        van harde schijven, SSD's en USB-sticks. Ook optimaliseren we uw systeem
        en zorgen we voor veilige back-ups, zodat u weer zorgeloos kunt werken
        en genieten.
      </p>
      <a
        href="#services"
        class="bg-white bg-opacity-20 backdrop-blur-sm text-white py-4 px-12 text-lg rounded-full border border-white hover:bg-opacity-40 transition duration-300 ease-in-out"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        Ontdek meer
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  businessName: string;
}>();
</script>
