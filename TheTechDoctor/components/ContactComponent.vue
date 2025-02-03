<template>
  <!-- Contact Section with Contact Info -->
  <section id="contact" class="py-20 px-4 bg-gray-50" data-aos="fade-left">
    <h2 class="text-3xl md:text-4xl font-semibold mb-6 text-center">
      Contact Info
    </h2>
    <div class="space-y-4 text-center text-gray-700">
      <div class="flex items-center justify-center space-x-2">
        <!-- Email Icon -->
        <svg
          class="h-6 w-6 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M16 12H8m8 0a4 4 0 10-8 0 4 4 0 008 0z"
          />
        </svg>
        <span class="font-bold">Email:</span>
        <a
          href="mailto:robin@de-wolf.eu"
          class="hover:text-blue-600 transition-colors"
          >robin@de-wolf.eu</a
        >
      </div>
      <div class="flex items-center justify-center space-x-2">
        <!-- Phone Icon -->
        <svg
          class="h-6 w-6 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 5a2 2 0 012-2h3.28a2 2 0 011.96 1.607l.637 3.189a2 2 0 01-.553 1.73l-2.1 2.1a11.042 11.042 0 005.516 5.516l2.1-2.1a2 2 0 011.73-.553l3.189.637A2 2 0 0121 15.72V19a2 2 0 01-2 2h-1C9.163 21 3 14.837 3 7V5z"
          />
        </svg>
        <span class="font-bold">Phone:</span>
        <a href="tel:+32488221025" class="hover:text-blue-600 transition-colors"
          >+32488221025</a
        >
      </div>
      <div class="flex items-center justify-center space-x-2">
        <!-- Location Icon -->
        <svg
          class="h-6 w-6 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 11c-3.866 0-7 3.134-7 7h14c0-3.866-3.134-7-7-7z"
          />
        </svg>
        <span class="font-bold">Address:</span>
        <p>Spoorstraat 119, 9340 Lede</p>
      </div>
    </div>
  </section>
</template>
