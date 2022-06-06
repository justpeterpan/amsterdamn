<template>
  <div>
    <NuxtPage />
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
