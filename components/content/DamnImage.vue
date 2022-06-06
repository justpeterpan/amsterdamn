<template>
  <div class="my-4">
    <img :src="src" :alt="alt" class="rounded" />
    <div class="text-xs italic mt-1 dark:text-lighter-gray">{{ description }}</div>
  </div>
</template>

<script setup>
defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>
