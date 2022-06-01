<template>
  <Popover class="relative bg-white lg:bg-transparent z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex justify-between lg:border-b lg:border-slate-600 lg:border-dotted items-center py-6 md:justify-start md:space-x-10">
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <a href="/"> kt logo</a>
        </div>
        <div class="flex items-center justify-end flex-1 lg:w-0">Theme Toggle</div>
      </div>
    </div>
  </Popover>
</template>

<script setup>
import { Popover } from '@headlessui/vue';
</script>
