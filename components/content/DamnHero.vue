<template>
  <div class="pt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-base text-yellow-300 font-semibold tracking-wide uppercase relative">{{ subHeadline }}</h2>
    <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-light sm:text-4xl">{{ headline }}</p>
    <div class="mt-4 space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
      <p class="max-w-2xl text-xl text-gray-500 dark:text-light-gray">{{ descFirst }}</p>
      <p class="max-w-2xl text-xl text-gray-500 dark:text-light-gray">{{ descSecond }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  headline: {
    type: String,
    required: true,
  },
  subHeadline: {
    type: String,
    required: true,
  },
  descFirst: {
    type: String,
    required: true,
  },
  descSecond: {
    type: String,
    required: true,
  },
});
</script>
