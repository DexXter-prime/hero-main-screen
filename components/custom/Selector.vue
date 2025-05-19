<script setup lang="ts">
  import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent, DropdownMenuLabel,
    DropdownMenuTrigger
  } from "~/components/ui/dropdown-menu";
  import {Button} from "~/components/ui/button";
  import type {IOption} from "~/types/types";

  /**
   * options: набор опций для фильтра
   * defaultValue: дефолтное значение для фильтра
   * modelValue: набор выбранных фильтров
   * subtitle: доп. название для каждого фильтра
   */
  interface IProps {
    options: IOption[];
    defaultValue: IOption;
    modelValue: string[];
    subtitle: string;
  }

  const props = defineProps<IProps>();

  /**
   * Отдаем на верх набор выбранных опций для каждого фильтра
   */
  const emit = defineEmits(['update:modelValue']);

  const selectedItems = ref<string[]>(props.modelValue || [props.defaultValue.value]);

  watch(selectedItems, (value: string[]) => {
    emit('update:modelValue', value);
  });


  function setChecked(checked: boolean, option: {value: string, label: string}) {
    if (option.value === 'any') {
      selectedItems.value = [option.value]
      return;
    }

    if (checked) {
      selectedItems.value = [...selectedItems.value, option.value]
    } else {
      selectedItems.value = selectedItems.value.filter(item => item !== option.value)
    }
  }

  const finalOptions = computed(() => [props.defaultValue, ...props.options]);

  const titleValues = computed(() => props.modelValue.reduce((acc, curr) => {
    const filterOption = finalOptions.value.find(option => curr === option.value) || '';
    if (filterOption) {
      acc.unshift(filterOption.label )
    }
    return acc;
  }, [] as string[]));
  
  const joinedValues = computed(() => {
    if (titleValues.value.length > 1) {
      return `${titleValues.value[0]}, ...`;
    }
    return titleValues.value[0];
  });
</script>

<template>
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <div class="w-full h-full flex items-start justify-between flex-col cursor-pointer">
          <div>
            <p class="font-mabry text-small text-base-grey w-full">{{ props.subtitle }}</p>
          </div>

          <div class="flex items-center justify-between w-full">
            <p class="font-mabry color-base-dark text-big">{{ joinedValues }}</p>
            <Button class="
           shadow-none
           cursor-pointer
           flex items-center
           justify-center
           border
           p-[.6rem]
           border-base-grey
           bg-transparent
           rounded-[.4rem]
           hover:bg-transparent
           color-base-dark
           w-[2.2rem]
           h-[2.2rem]
          "
            >
              <i-down-arrow filled :fontControlled="false" class="w-[.8rem] h-[.8rem]"/>
            </Button>
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent class="w-[28.2rem]">
        <DropdownMenuCheckboxItem
            v-for="option in finalOptions"
            :key="option.value"
            :model-value="selectedItems.includes(option.value)"
            @update:model-value="setChecked($event, option)"
            class="font-mabry text-3xl text-base-dark cursor-pointer px-[3.2rem] py-[.8rem]"
        >
          {{ option.label }}
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
</template>