<template>
  <div class="py-12 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-base text-yellow-300 font-semibold tracking-wide uppercase relative">{{ subHeadline }}</h2>
      <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">{{ headline }}</p>
      <div class="mt-4 space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
        <p class="max-w-2xl text-xl text-gray-500">{{ desc_first }}</p>
        <p class="max-w-2xl text-xl text-gray-500">{{ desc_second }}</p>
      </div>
      <div class="mt-10">
        <div class="space-y-10 md:space-y-0 grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <slot name="posts" />
        </div>
      </div>
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
  desc_first: {
    type: String,
    required: true,
  },
  desc_second: {
    type: String,
    required: true,
  },
});
</script>
