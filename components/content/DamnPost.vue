<template>
  <div v-if="!pending && postContent" class="py-12 bg-white">
    <div v-if="postContent.image" class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 absolute lg:top-0 top-[73px] w-full">
      <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" :src="postContent.image" alt="" />
    </div>
    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
      :class="{
        'top-56 sm:top-72 md:top-96 lg:top-0 xl:top-0': postContent.image,
      }"
    >
      <h2 class="text-base text-yellow-300 font-semibold tracking-wide uppercase relative">{{ postContent.description }}</h2>
      <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">{{ postContent.title }}</p>
      <section class="text-xl text-gray-500 mt-4" :class="{'lg:max-w-xl': postContent.image}">
        <slot name="content" />
      </section>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useAsyncData } from '#app';
import { queryContent } from '~/.nuxt/imports';

const { path } = useRoute();
const { data: postContent, pending } = await useAsyncData(`post-${path}`, () => queryContent(`${path}`).findOne());
</script>
