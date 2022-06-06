<template>
  <div class="w-full bg-white z-[100] backdrop-blur-sm bg-white/70 dark:bg-dark/80 firefox:bg-white firefox:dark:bg-dark">
    <nav
      class="max-w-7xl mx-auto py-8 h-8 px-4 sm:px-6 lg:px-8 flex flex-row items-center justify-between border-b border-dashed dark:border-lighter-gray"
    >
      <a href="/">
        <div class="flex flex-row text-gray-900">
          <HomeIcon class="h-6 w-6 dark:text-yellow-300" />
          <span class="ml-2 dark:text-light"> </span>
        </div>
      </a>
      <DamnDarkToggle />
    </nav>
  </div>
</template>

<script setup>
import { HomeIcon } from '@heroicons/vue/outline';
</script>
