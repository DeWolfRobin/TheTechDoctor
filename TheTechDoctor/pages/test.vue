<!-- pages/index.vue -->
<template>
  <div class="font-sans text-gray-800">
    <!-- Navigation / Header -->
    <header class="fixed w-full top-0 left-0 bg-white shadow z-50">
      <nav
        class="max-w-6xl mx-auto flex items-center justify-between py-4 px-6"
      >
        <div class="text-xl font-bold">
          {{ businessName }}
        </div>
        <div class="space-x-6 hidden md:block">
          <a href="#hero" class="hover:text-blue-600">Home</a>
          <a href="#about" class="hover:text-blue-600">About</a>
          <a href="#pricing" class="hover:text-blue-600">Pricing</a>
          <a href="#contact" class="hover:text-blue-600">Contact</a>
        </div>
        <!-- Mobile menu toggle (optional) -->
      </nav>
    </header>

    <!-- Hero Section -->
    <section
      id="hero"
      class="h-screen flex flex-col items-center justify-center bg-gray-50 pt-16"
      data-aos="fade-up"
    >
      <h1 class="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
        Welcome to {{ businessName }}
      </h1>
      <p class="text-lg md:text-xl text-gray-600 max-w-2xl text-center mb-6">
        We provide top-notch solutions to help your business grow.
      </p>
      <a
        href="#about"
        class="bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-700 transition-colors"
        data-aos="zoom-in"
      >
        Learn More
      </a>
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
          {{ businessName }} has been a leader in the industry for over 10
          years. Our team of experts is dedicated to delivering high-quality
          products and exceptional customer service. We believe in forging
          strong relationships with our clients and helping them succeed.
        </p>
        <div class="flex justify-center">
          <a
            href="#pricing"
            class="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
            data-aos="zoom-in"
          >
            Our Pricing
          </a>
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

    <!-- Contact Section (Optional) -->
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
const businessName = "My OnePager Business";
</script>

<style scoped>
/* Optional local styles for your page */
</style>
