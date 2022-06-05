<template>
  <div v-if="!pending && postContent" class="py-12">
    <div v-if="postContent.image" class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 absolute top-0 w-full">
      <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" :src="postContent.image" alt="" />
    </div>
    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
      :class="{
        'top-56 sm:top-72 md:top-96 lg:top-0 xl:top-0': postContent.image,
      }"
    >
      <div class="flex flex-col">
        <p class="text-base text-yellow-300 font-semibold tracking-wide uppercase">{{ postContent.description }}</p>
        <h1 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-light sm:text-4xl">
          {{ postContent.title }}
        </h1>
        <section class="text-xl text-gray-500 dark:text-light-gray mt-4" :class="{ 'lg:max-w-lg': postContent.image }">
          <slot />
        </section>
        <NuxtLink to="/"><ArrowNarrowLeftIcon class="w-8 h-8 mt-4 dark:text-yellow-300" /></NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ArrowNarrowLeftIcon } from '@heroicons/vue/outline';
import { useRoute } from 'vue-router';
import { useAsyncData, queryContent } from '~/.nuxt/imports';

const { path } = useRoute();
const { data: postContent, pending } = await useAsyncData(`post-${path}`, () => queryContent(`${path}`).findOne());
</script>
