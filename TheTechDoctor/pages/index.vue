<template>
  <!-- Main container with scroll snapping -->
  <div class="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
    <!-- Hero Section -->
    <section
      class="relative bg-cover bg-center h-screen snap-start"
      style="background-image: url('https://picsum.photos/seed/hero/1200/600')"
    >
      <div class="absolute inset-0 bg-black opacity-60"></div>
      <div
        class="relative container mx-auto px-4 h-full flex flex-col justify-center items-center"
      >
        <h1 class="text-5xl font-bold text-white mb-4" data-aos="fade-down">
          Expert IT Solutions for Your PC
        </h1>
        <p
          class="text-lg text-gray-200 max-w-2xl text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Specializing in PC cleanup, virus/malware removal, and file recovery
          to keep your systems running at peak performance.
        </p>
      </div>
    </section>

    <!-- Services Section -->
    <section
      class="bg-gray-100 snap-start h-screen flex items-center"
      data-aos="fade-up"
      data-aos-delay="400"
    >
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-semibold text-gray-800 mb-8 text-center">
          Our Services
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- PC Cleanup Card -->
          <div class="bg-white shadow-lg rounded-lg overflow-hidden">
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
          <div class="bg-white shadow-lg rounded-lg overflow-hidden">
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
          <div class="bg-white shadow-lg rounded-lg overflow-hidden">
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
    <section
      class="snap-start h-screen flex items-center"
      data-aos="fade-up"
      data-aos-delay="600"
    >
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-semibold text-gray-800 mb-8 text-center">
          Why Choose Us?
        </h2>
        <div class="space-y-6 max-w-3xl mx-auto">
          <div class="flex items-start">
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
              <h3 class="text-xl font-bold text-gray-800">
                Professional &amp; Experienced
              </h3>
              <p class="text-gray-600">
                Our team of seasoned professionals delivers top-notch IT
                services with a focus on quality and integrity.
              </p>
            </div>
          </div>
          <div class="flex items-start">
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
              <h3 class="text-xl font-bold text-gray-800">
                Comprehensive Solutions
              </h3>
              <p class="text-gray-600">
                Our services cover everything from routine maintenance to
                critical data recovery, ensuring your IT needs are fully met.
              </p>
            </div>
          </div>
          <div class="flex items-start">
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
              <h3 class="text-xl font-bold text-gray-800">
                Client-Focused Service
              </h3>
              <p class="text-gray-600">
                We prioritize clear communication and transparency, ensuring
                that your needs are met every step of the way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call-to-Action Section -->
    <section
      class="bg-blue-600 snap-start h-screen flex items-center"
      data-aos="fade-up"
      data-aos-delay="800"
    >
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-4xl font-semibold text-white mb-4">
          Ready to Enhance Your PC's Performance?
        </h2>
        <p class="text-lg text-blue-100 mb-6">
          Contact us today for a consultation or to learn more about our
          services.
        </p>
        <a
          href="mailto:contact@example.com"
          class="inline-block bg-white text-blue-600 py-3 px-6 rounded hover:bg-blue-100 transition duration-300"
        >
          Get in Touch
        </a>
      </div>
    </section>
  </div>
</template>

<script setup></script>

<style scoped>
/* Add any additional custom styles if needed */
</style>
