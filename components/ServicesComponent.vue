<template>
  <!-- Services Section -->
  <BaseSection id="services" :index="1" aos="fade-up">
    <div class="max-w-6xl mx-auto px-4">
      <h2 class="text-4xl font-semibold text-center mb-12">Onze Diensten</h2>
      <div class="space-y-8">
        <div
          v-for="(service, index) in services"
          :key="index"
          :class="[
            'transition-transform duration-300',
            // Even-indexed cards shift right, odd-indexed shift left.
            index % 2 === 0 ? 'md:translate-x-20' : 'md:-translate-x-20',
          ]"
        >
          <ServiceSubcomponent
            :title="service.title"
            :description="service.description"
            :image="service.image"
            :animation="service.animation"
            :points="service.points"
          />
        </div>
      </div>
    </div>
  </BaseSection>
</template>

<script setup lang="ts">
import ServiceSubcomponent from "./ServiceSubcomponent.vue";

const services = [
  {
    title: "Virus- en Malware Verwijdering",
    description:
      "Met meer dan 6 jaar ervaring in cybersecurity bied ik een eenvoudige en effectieve service om virussen, malware, spyware en ransomware van uw apparaten te verwijderen. Ik gebruik betrouwbare, industrienormgereedschappen om uw persoonlijke data te beschermen en uw systeem te beveiligen – geen technische kennis vereist.",
    image: "https://picsum.photos/seed/virusremoval/400/300",
    animation: "fade-right",
    points: [],
  },
  {
    title: "Dataherstel voor Android-apparaten",
    description:
      "Krijgt u geen toegang meer tot belangrijke bestanden op uw Android-apparaat? Onze service helpt u op een eenvoudige en veilige manier verloren data, zoals foto's, contacten en documenten, te herstellen.",
    image: "https://picsum.photos/seed/androidrecovery/400/300",
    animation: "fade-left",
    points: [],
  },
  {
    title: "Dataherstel voor iOS-apparaten",
    description:
      "Heeft u data verloren op uw iPhone of iPad? Wij bieden een eenvoudige oplossing om verloren foto's, berichten, contacten en andere belangrijke bestanden te herstellen, zonder dat u technische kennis nodig heeft.",
    image: "https://picsum.photos/seed/iosrecovery/400/300",
    animation: "fade-right",
    points: [],
  },
  {
    title: "Dataherstel voor PC's en Laptops",
    description:
      "Verloor u belangrijke documenten of bestanden op uw computer? Onze service voor pc's en laptops zorgt voor een snelle en veilige dataherstel, zodat u snel weer aan de slag kunt.",
    image: "https://picsum.photos/seed/pcrecovery/400/300",
    animation: "fade-left",
    points: [],
  },
  {
    title: "Herstel van Corrupte Bestanden",
    description:
      "Als bestanden beschadigd of corrupt zijn geraakt, zorgen wij voor een efficiënte herstelservice zodat uw data weer bruikbaar wordt, zonder ingewikkelde procedures.",
    image: "https://picsum.photos/seed/corruptrecovery/400/300",
    animation: "fade-right",
    points: [],
  },
  {
    title: "Dataherstel voor Overige Apparaten",
    description:
      "Ook voor andere opslagmedia zoals harde schijven, SSD's en USB-sticks bent u bij ons aan het juiste adres. Wij herstellen data op een veilige en betrouwbare manier, zodat u uw bestanden terugkrijgt.",
    image: "https://picsum.photos/seed/otherrecovery/400/300",
    animation: "fade-left",
    points: [],
  },
];
</script>
