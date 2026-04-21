<template>
  <section :id="id" :class="[bgClass, 'py-20', extraClasses]" :data-aos="aos">
    <slot></slot>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  id: string;
  index?: number; // used to compute the background color
  aos?: string; // optional data-aos attribute value
  extraClasses?: string; // any additional classes you want to pass
}>();

// Define your alternate background classes.
const bgClasses = ["bg-white", "bg-gray-50"];
// If an index is provided, choose one based on the modulo of the number of classes;
// otherwise default to white.
const bgClass =
  props.index !== undefined
    ? bgClasses[props.index % bgClasses.length]
    : "bg-white";
</script>

<style scoped>
/* Adjust the scroll margin to the height of your header */
section {
  scroll-margin-top: 80px; /* change 80px to match your header height */
}
</style>
