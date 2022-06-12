<template>
  <div class="my-4 not-prose">
    <img :src="src" :alt="alt" class="rounded" />
    <span class="text-xs italic mt-1 dark:text-lighter-gray">{{ description }}</span>
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
