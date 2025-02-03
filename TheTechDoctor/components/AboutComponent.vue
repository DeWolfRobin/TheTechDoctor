<template>
  <!-- Over Ons Sectie -->
  <BaseSection id="about" :index="2" aos="fade-right">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-semibold mb-6 text-center">
        Over ons
      </h2>
      <p class="text-gray-600 text-center leading-relaxed mb-8">
        Bij {{ businessName }} bent u in veilige handen. Met een opleiding in
        informaticabeheer en een bachelor diploma in "Computer en Cybercrime
        professional" heb ik een sterke theoretische basis. Daarnaast heb ik 6
        jaar ervaring opgedaan als security expert bij NVISO en ben ik in het
        verleden 3 jaar succesvol zelfstandig geweest als ethical hacker en bug
        bounty hunter.
      </p>
      <p class="text-gray-600 text-center leading-relaxed mb-8">
        Mijn expertise wordt erkend door gerenommeerde namen als Google,
        Colruyt, Valve en Adobe. Deze unieke combinatie van opleiding,
        praktijkervaring en erkenning in de industrie stelt mij in staat om u op
        een eenvoudige en effectieve manier te beschermen tegen cyberdreigingen
        en technische problemen.
      </p>
    </div>
  </BaseSection>
</template>

<script setup lang="ts">
defineProps<{
  businessName: string;
}>();
</script>
