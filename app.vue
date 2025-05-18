<script setup lang="ts">
  import TheHeader from "~/components/page/TheHeader.vue";
  import ThePromo from "~/components/page/ThePromo.vue";
  import HeroScreen from "~/components/page/HeroScreen.vue";
  import type {IFiltersFetch, IHeroFetch} from "~/types/types";
  import FilterSection from "~/components/page/FilterSection.vue";

  const heroData = reactive<IHeroFetch>({} as IHeroFetch);
  const filtersData = reactive<IFiltersFetch>({} as IFiltersFetch);

  async function fetchHeroData() {
    try {
      const { baseData, images } = await $fetch<IHeroFetch>('/api/hero-data');
      heroData.baseData = baseData;
      heroData.images = images
    } catch (e) {
      console.log(e)
    }
  }

  async function fetchFilters() {
    try {
      const { filters } = await $fetch<IFiltersFetch>('/api/filters-data');
      filtersData.filters = filters;
    } catch (e) {
      console.log(e)
    }
  }

  onMounted( async () => {
    await fetchHeroData();
    await fetchFilters();
  });

  const heroDataExists = computed(() => Object.keys(heroData).length);
  const filtersExits = computed(() => Object.keys(filtersData).length)

</script>

<template>
  <TheHeader class="fixed flex-col w-screen z-1000"/>
  <main class="w-screen">
    <HeroScreen v-if="heroDataExists" :base-data="heroData.baseData"  :images="heroData.images" />
    <FilterSection v-if="filtersExits"  :filters="filtersData.filters"/>
  </main>
</template>
