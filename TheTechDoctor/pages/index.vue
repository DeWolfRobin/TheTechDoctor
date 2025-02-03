<template>
  <div class="font-sans text-gray-800">
    <HeaderComponent :businessName="businessName" />

    <HeroComponent :businessName="businessName" />

    <AboutComponent :businessName="businessName" />

    <ServicesComponent />

    <PricingComponent />

    <ContactComponent />

    <FooterComponent :businessName="businessName" />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

const businessName = "The Tech Doctor";

onMounted(() => {
  AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: false,
  });
});
</script>

<style>
/* Global styles to hide scrollbars for all browsers */
html,
body {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
}

html::-webkit-scrollbar,
body::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}
</style>
