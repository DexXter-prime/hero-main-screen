<script setup lang="ts">
  let heroData = reactive([]);

  async function fetchHeroData() {
    try {
      heroData = await $fetch('/api/hero-data');
    } catch (e) {
      console.log(e)
    }
  }

  onMounted(async () => {
    await fetchHeroData();
    console.log(heroData)
  })
</script>

<template>
  <div>
    <p class="font-mabry text-big text-base-yellow underline">
        На русском
    </p>
    <i-logo filled/>
  </div>
</template>
