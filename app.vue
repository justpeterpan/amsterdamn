<template>
  <div>
    <DamnNavBar />
    <NuxtPage />
  </div>
</template>

<script setup>
import { definePageMeta } from '~/.nuxt/imports';

definePageMeta({
  pageTransition: true,
});
</script>
