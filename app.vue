<template>
  <div>
    <DamnNavBar class="sticky top-0 transition-colors duration-700 ease-in-out" />
    <NuxtPage class="pt-8 relative" />
  </div>
</template>

<script setup>
import { useHead } from '~/.nuxt/imports';
useHead({
  bodyAttrs: {
    class: 'bg-white dark:bg-dark transition-colors duration-700 ease-in-out',
  },
});
</script>
