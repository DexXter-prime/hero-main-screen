<script setup lang="ts">
  const STATIC_DATA = {
    promo: 'Акция',
    promoFlats: 'Квартиры со скидкой 30%'
  };

  /**
   * Эмит события для скрытия промо
   */
  const emit = defineEmits(['hide'])
</script>

<template>
  <div
      class="w-full flex items-center justify-center py-[1rem] gap-[2rem] relative bg-white"
  >
    <Button class="cursor-pointer rounded-[.4rem] color-base-dark bg-base-yellow font-mabry hover:bg-base-yellow text-ex-small px-[.8rem]">
      {{ STATIC_DATA.promo }}
    </Button>

    <p class="font-mabry text-medium color-base-dark border-b border-base-dark hover:border-b-0 cursor-pointer">{{ STATIC_DATA.promoFlats }}</p>

    <Button
      @click="emit('hide')"
     class="
     shadow-none
     absolute
     max-sm:right-0
     right-20
     cursor-pointer
     flex items-center
     justify-center
     border
     p-[1rem]
     m-[1rem]
     border-base-grey
     bg-transparent
     rounded-[.4rem]
     hover:bg-transparent
     color-base-dark
      ">
      <i-cross filled :fontControlled="false" class="w-[.8rem] h-[.8rem]"/>
    </Button>
  </div>
</template>