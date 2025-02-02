<template>
  <div class="font-sans text-gray-800">
    <!-- Fixed Navigation/Header -->
    <header class="fixed w-full top-0 left-0 bg-white shadow z-50">
      <nav
        class="max-w-6xl mx-auto flex items-center justify-between py-4 px-6"
      >
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
          virus/malware removal, and file recovery to keep your systems running
          at peak performance.
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

    <!-- About Section -->
    <section
      id="about"
      class="py-20 px-4 md:px-8 bg-white"
      data-aos="fade-right"
    >
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-semibold mb-6 text-center">
          About Us
        </h2>
        <p class="text-gray-600 text-center leading-relaxed mb-8">
          {{ businessName }} has been a leader in IT solutions for years. Our
          team of experts is dedicated to delivering high-quality services and
          exceptional customer care. We strive to ensure your technology works
          seamlessly so you can focus on what matters most.
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
    </section>

    <!-- Services Section -->
    <section id="services" class="py-20 bg-gray-50" data-aos="fade-up">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-4xl font-semibold text-center mb-12">Our Services</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- PC Cleanup Card -->
          <div
            class="bg-white shadow-lg rounded-lg overflow-hidden"
            data-aos="flip-left"
          >
            <img
              src="https://picsum.photos/seed/pccleanup/400/200"
              alt="PC Cleanup"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h3 class="text-2xl font-bold text-gray-800 mb-2">PC Cleanup</h3>
              <p class="text-gray-600">
                Enhance your computer’s performance by removing unnecessary
                files, cleaning temporary data, and optimizing system settings.
              </p>
            </div>
          </div>
          <!-- Virus & Malware Removal Card -->
          <div
            class="bg-white shadow-lg rounded-lg overflow-hidden"
            data-aos="flip-up"
          >
            <img
              src="https://picsum.photos/seed/virusremoval/400/200"
              alt="Virus & Malware Removal"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h3 class="text-2xl font-bold text-gray-800 mb-2">
                Virus &amp; Malware Removal
              </h3>
              <p class="text-gray-600">
                Protect your device with advanced threat detection. We identify,
                isolate, and remove viruses and malware to secure your system.
              </p>
            </div>
          </div>
          <!-- File Recovery Card -->
          <div
            class="bg-white shadow-lg rounded-lg overflow-hidden"
            data-aos="flip-right"
          >
            <img
              src="https://picsum.photos/seed/filerecovery/400/200"
              alt="File Recovery"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h3 class="text-2xl font-bold text-gray-800 mb-2">
                File Recovery
              </h3>
              <p class="text-gray-600">
                Recover lost or inaccessible files from broken PCs, damaged
                drives, USBs, or phones with our state-of-the-art recovery
                techniques.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section id="why-us" class="py-20 bg-white" data-aos="fade-up">
      <div class="max-w-4xl mx-auto px-4">
        <h2 class="text-4xl font-semibold text-center mb-12">Why Choose Us?</h2>
        <div class="space-y-6">
          <div class="flex items-start" data-aos="fade-up" data-aos-delay="100">
            <div class="flex-shrink-0">
              <svg
                class="h-8 w-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2l4-4"
                ></path>
              </svg>
            </div>
            <div class="ml-4">
              <h3 class="text-xl font-bold">Professional &amp; Experienced</h3>
              <p class="text-gray-600">
                Our team of seasoned professionals delivers top-notch IT
                services with a focus on quality and integrity.
              </p>
            </div>
          </div>
          <div class="flex items-start" data-aos="fade-up" data-aos-delay="200">
            <div class="flex-shrink-0">
              <svg
                class="h-8 w-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2l4-4"
                ></path>
              </svg>
            </div>
            <div class="ml-4">
              <h3 class="text-xl font-bold">Comprehensive Solutions</h3>
              <p class="text-gray-600">
                Our services cover everything from routine maintenance to
                critical data recovery, ensuring your IT needs are fully met.
              </p>
            </div>
          </div>
          <div class="flex items-start" data-aos="fade-up" data-aos-delay="300">
            <div class="flex-shrink-0">
              <svg
                class="h-8 w-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2l4-4"
                ></path>
              </svg>
            </div>
            <div class="ml-4">
              <h3 class="text-xl font-bold">Client-Focused Service</h3>
              <p class="text-gray-600">
                We prioritize clear communication and transparency, ensuring
                that your needs are met every step of the way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section id="pricing" class="py-20 bg-gray-50" data-aos="fade-up">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-semibold text-center mb-8">
          Our Pricing
        </h2>
        <p class="text-center text-gray-600 mb-12">
          Choose a plan that best fits your needs.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Basic Plan -->
          <div
            class="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow"
            data-aos="flip-left"
          >
            <h3 class="text-xl font-semibold mb-4">Basic</h3>
            <p class="text-gray-600 text-sm mb-6">
              Ideal for small businesses.
            </p>
            <p class="text-3xl font-bold mb-4">$49</p>
            <ul class="text-gray-600 mb-6 space-y-2">
              <li>- Feature One</li>
              <li>- Feature Two</li>
              <li>- Basic Support</li>
            </ul>
            <button
              class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Choose Plan
            </button>
          </div>
          <!-- Standard Plan -->
          <div
            class="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow"
            data-aos="flip-up"
          >
            <h3 class="text-xl font-semibold mb-4">Standard</h3>
            <p class="text-gray-600 text-sm mb-6">Perfect for growing teams.</p>
            <p class="text-3xl font-bold mb-4">$99</p>
            <ul class="text-gray-600 mb-6 space-y-2">
              <li>- Feature One</li>
              <li>- Feature Two</li>
              <li>- Feature Three</li>
              <li>- Priority Support</li>
            </ul>
            <button
              class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Choose Plan
            </button>
          </div>
          <!-- Premium Plan -->
          <div
            class="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow"
            data-aos="flip-right"
          >
            <h3 class="text-xl font-semibold mb-4">Premium</h3>
            <p class="text-gray-600 text-sm mb-6">
              Best for large enterprises.
            </p>
            <p class="text-3xl font-bold mb-4">$199</p>
            <ul class="text-gray-600 mb-6 space-y-2">
              <li>- All Standard Features</li>
              <li>- Dedicated Account Manager</li>
              <li>- 24/7 Priority Support</li>
            </ul>
            <button
              class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Choose Plan
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 px-4 bg-white" data-aos="fade-left">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-semibold mb-6 text-center">
          Get in Touch
        </h2>
        <p class="text-gray-600 text-center leading-relaxed mb-8">
          Have questions or want to work with us? Drop us a message below.
        </p>
        <form class="space-y-4">
          <div>
            <label class="block mb-2 text-gray-700">Name</label>
            <input
              type="text"
              class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label class="block mb-2 text-gray-700">Email</label>
            <input
              type="email"
              class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label class="block mb-2 text-gray-700">Message</label>
            <textarea
              rows="4"
              class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="How can we help you?"
            ></textarea>
          </div>
          <button
            type="submit"
            class="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white p-4 text-center">
      © {{ new Date().getFullYear() }} {{ businessName }}. All Rights Reserved.
    </footer>
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
    once: true,
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
