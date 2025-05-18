<script setup lang="ts">
import type {IHeroFetch } from "~/types/types";

  interface IProps extends IHeroFetch {}

  const { $gsap } = useNuxtApp();
  const props = defineProps<IProps>();

  const animatedImages = computed(() => [...props.images, { id: props.baseData.id, image: props.baseData.urlBase }]);

  onMounted(() => {
    $gsap.to(".hero-imgs", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 3,
      ease: "power4.inOut",
      stagger: 0.19,
      delay: 1,
    });

    $gsap.from(".hero-title", {
      clipPath: "polygon(0% 0%, 5% 0%, 5% 100%, 0% 100%)",
      x: '-100vw',
      duration: 3,
      ease: "power2.inOut",
      stagger: 0.16,
      delay: 2,
    });
  })
</script>

<template>
  <section class="w-screen h-screen overflow-hidden">
      <div class="w-full h-full overflow-hidden relative">
        <div class="w-full h-full absolute px-[4rem] pt-[30rem] max-sm:pt-[20rem] pb-0 z-10 hero-title">
          <i-hero-title class="w-full h-full" filled :fontControlled="false"/>
        </div>
        <NuxtImg
            class="w-screen h-screen object-cover absolute"
            :src="props.baseData.urlBase"
            alt="bg-image"
        />
        <NuxtImg
          v-for="image in animatedImages"
          :key="image.id"
          :src="image.image"
          :alt="`image-${image.id}`"
          class="w-screen h-screen object-cover absolute hero-imgs"
        />
      </div>
  </section>
</template>

<style scoped>
  .hero-imgs {
    clip-path: polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%);
  }

  .hero-title {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  }
</style>