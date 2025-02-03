<template>
  <!-- Services Section -->
  <BaseSection id="services" :index="2" aos="fade-up">
    <div class="max-w-6xl mx-auto px-4">
      <h2 class="text-4xl font-semibold text-center mb-12">Our Services</h2>
      <div class="space-y-16">
        <ServiceSubcomponent
          v-for="(service, index) in services"
          :key="index"
          :title="service.title"
          :description="service.description"
          :image="service.image"
          :animation="service.animation"
          :points="service.points"
        />
      </div>
    </div>
  </BaseSection>
</template>

<script setup lang="ts">
import ServiceSubcomponent from "./ServiceSubcomponent.vue";

const services = [
  {
    title: "Virus & Malware Removal",
    description:
      "With over 6 years of cybersecurity experience, I provide a simple and effective service to remove viruses, malware, spyware, and ransomware from your devices. I use trusted, industry-standard tools to protect your personal data and secure your system—no technical expertise required.",
    image: "https://picsum.photos/seed/virusremoval/400/300",
    animation: "fade-right",
    points: [], // No bullet points needed for this service
  },
  {
    title: "Data Recovery",
    description:
      "Lost important files? I offer a straightforward data recovery service that can help you get your files back—even if you're not a tech expert. I recover data from a range of devices, including PCs, mobile phones, and standalone storage devices.",
    image: "https://picsum.photos/seed/filerecovery/400/300",
    animation: "fade-left",
    points: [
      {
        title: "Example 1",
        text: "If you've lost your personal photos, I can help recover those precious memories.",
      },
      {
        title: "Example 2",
        text: "For students, if a critical file becomes corrupt before a deadline, I can repair it quickly so you don't miss your submission.",
      },
    ],
  },
];
</script>
