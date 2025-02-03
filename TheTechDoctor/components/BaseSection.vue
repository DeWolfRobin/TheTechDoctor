<template>
  <section :id="id" :class="[bgClass, 'py-20']" data-aos="fade-up">
    <slot />
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  id: string;
  index: number;
}>();

// Define the background classes in the order you want them to appear.
const bgClasses = ["bg-white", "bg-gray-50"];
// Compute the class based on the index (alternating white, gray, white, gray, …)
const bgClass = bgClasses[props.index % bgClasses.length];
</script>
