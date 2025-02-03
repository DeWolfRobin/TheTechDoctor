<template>
  <!-- About Section -->
  <BaseSection id="services" :index="1" aos="fade-right">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-semibold mb-6 text-center">
        About Us
      </h2>
      <p class="text-gray-600 text-center leading-relaxed mb-8">
        With 6 years of experience in cybersecurity, {{ businessName }} has been
        a trusted provider of IT solutions. I am dedicated to delivering
        high-quality cybersecurity services and exceptional customer care. My
        expertise ensures that your technology remains secure, efficient, and
        reliable, so you can focus on what matters most.
      </p>
      <div class="flex justify-center">
        <a
          href="#services"
          class="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
          data-aos="zoom-in"
        >
          Our Services
        </a>
      </div>
    </div>
  </BaseSection>
</template>

<script setup lang="ts">
defineProps<{
  businessName: string;
}>();
</script>
