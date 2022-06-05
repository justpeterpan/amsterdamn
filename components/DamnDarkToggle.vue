<template>
  <button @click="toggleDarkMode">
    <component :is="colorModeIcon" class="h-6 w-6 text-gray-900 dark:text-light" />
  </button>
</template>

<script setup>
import { computed } from 'vue';
import { SunIcon, MoonIcon } from '@heroicons/vue/outline';
import { useColorMode } from '~/.nuxt/imports';

const color = useColorMode();
const colorModeIcon = computed(() => {
  return color.value === 'dark' ? MoonIcon : SunIcon;
});
const toggleDarkMode = () => {
  color.preference = color.value === 'dark' ? 'light' : 'dark';
};
</script>
