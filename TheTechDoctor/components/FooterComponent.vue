<template>
  <!-- Footer -->
  <footer class="bg-gray-800 text-white p-4 text-center">
    © {{ new Date().getFullYear() }} {{ businessName }}. All Rights Reserved.
  </footer>
</template>

<script setup lang="ts">
defineProps<{
  businessName: string;
}>();
</script>
