<template>
  <div
    class="flex flex-col md:flex-row items-center bg-white p-8 rounded-lg shadow-md transform transition hover:scale-105"
    :data-aos="animation"
  >
    <div class="md:w-1/3">
      <img :src="image" :alt="title" class="w-full h-auto rounded-lg" />
    </div>
    <div class="md:w-2/3 md:pl-8 mt-6 md:mt-0">
      <h3 class="text-2xl font-bold text-gray-800 mb-4">{{ title }}</h3>
      <p class="text-gray-600 leading-relaxed mb-4">{{ description }}</p>
      <ul
        v-if="points && points.length"
        class="list-disc ml-6 text-gray-600 space-y-2"
      >
        <li v-for="(point, index) in points" :key="index">
          <span v-if="point.title" class="font-bold">{{ point.title }}: </span>
          <span> {{ point.text }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  image: string;
  animation: string;
  points?: Array<{ title?: string; text: string }>;
}>();
</script>
