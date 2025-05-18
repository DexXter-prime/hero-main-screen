<script setup lang="ts">
  import ThePromo from "~/components/page/ThePromo.vue";

  const STATIC_DATA = {
    orderCall: 'Заказать звонок',
    chooseFlat: 'Выбрать квартиру',
  };

  const header = useTemplateRef<HTMLElement | null>('header');

  function onHidePromo() {
      if (header.value) {
        const hiddenClasses = 'transition duration-300 ease-in-out translate-y-[-5rem]'.split(' ')
        header.value.classList.add(...hiddenClasses);
      }
  }

</script>

<template>
  <header class="flex justify-between items-center flex-col" ref="header">
    <ThePromo @hide="onHidePromo" />

    <div class="flex items-center justify-between max-sm:justify-center w-full px-[4rem] py-[1.2rem]">
      <NuxtLink to="/">
        <i-logo class="w-[7.5rem] h-[4.6rem]" filled :fontControlled="false"/>
      </NuxtLink>

      <div class="flex items-center justify-around max-sm:hidden">

        <nav class="flex items-center justify-around gap-[2rem]">
          <NuxtLink class="font-mabry text-medium text-white cursor-pointer hover:border-b border-white">
            {{  STATIC_DATA.orderCall }}
          </NuxtLink>

          <NuxtLink class="font-mabry
          text-medium
          text-white
          cursor-pointer
          flex
          justify-center
          items-center
          gap-[.8rem]
          ">
            <span class="border-b hover:border-b-0">
              {{ STATIC_DATA.chooseFlat }}
            </span>
            <span class="block color-base-dark bg-base-yellow w-[2.2rem] h-[2.2rem] flex items-center justify-center rounded-[.4rem]">
              <i-arrow filled :fontControlled="false" class="w-[1rem] h-[1rem]"/>
            </span>
          </NuxtLink>
        </nav>

        <Button class="
        bg-transparent
        cursor-pointer
        hover:bg-transparent
        shadow-none
        w-[4rem]
        h-[4rem]
        flex items-center justify-center flex-col
        p-0
        ml-[3.2rem]
        max-sm:hidden
      "
        >
          <span class="block w-full border bg-white" />
          <span class="block w-full border bg-white"/>
        </Button>
      </div>
    </div>
  </header>
</template>