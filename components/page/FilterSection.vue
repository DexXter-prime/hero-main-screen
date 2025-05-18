<script setup lang="ts">
import { ref } from 'vue'
import Selector from "~/components/custom/Selector.vue";
import type {IFiltersFetch} from "~/types/types";

interface IProps extends IFiltersFetch {}

const STATIC_DATA = {
  flats: '126 квартир',
}

const props = defineProps<IProps>();


const selectedValues = ref<Record<string, string[]>>(props.filters.reduce((acc, curr) => {
  acc[curr.subtitle] = [curr.defaultValue.value];
  return acc;
}, {} as Record<string, string[]>))

</script>

<template>
  <section class="w-screen relative">
    <div class="absolute max-sm:relative left-0 right-0 m-auto flex items-center justify-center w-fit z-20 bottom-[-50%] max-lg:w-full">
      <ul class="flex max-sm:absolute max-sm:flex-col items-center justify-center w-full bg-white">
        <li
            v-for="filter in props.filters"
            :key="filter.id"
            class="
             w-[28.2rem]
             h-[7.9rem] py-[1.2rem]
             px-[3.2rem]
             flex items-center justify-center flex-col
             hover:border-b-4 hover:border-b-base-dark
             border-l
             border-r
             border-base-grey
        ">
          <Selector
              :options="filter.options"
              :default-value="filter.defaultValue"
              :subtitle="filter.subtitle"
              v-model="selectedValues[filter.subtitle]"
          />
        </li>
        <li class="
         w-[28.2rem]
         h-[7.9rem] py-[1.2rem]
         py-[2.6rem]
         flex items-center justify-center flex-col
         bg-base-dark
         cursor-pointer
        ">
          <div class="flex items-center justify-center font-mabry text-white text-big w-full">
            <span class="block hover:border-b-1 border-white">
              {{ STATIC_DATA.flats }}
            </span>
            <span class="block color-base-dark ml-[.8rem] bg-base-yellow w-[2.2rem] h-[2.2rem] flex items-center justify-center rounded-[.4rem]">
              <i-arrow filled :fontControlled="false" class="w-[1rem] h-[1rem]"/>
            </span>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>