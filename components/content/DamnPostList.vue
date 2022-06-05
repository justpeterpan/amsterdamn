<template>
  <div class="max-w-7xl pb-12 mx-auto px-4 sm:px-6 lg:px-8">
    <h2
      class="mt-2 text-3xl w-fit leading-8 font-extrabold tracking-tight text-gray-900 dark:text-light mb-10 border-dotted border-slate-800 dark:border-light-gray border-b-2"
    >
      {{ title }}
    </h2>
    <div class="space-y-10 md:space-y-0 grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
      <ContentList v-slot="{ list: postList }" path="/posts">
        <DamnPostListCard v-for="post in postList" :key="post.title" :post="post" />
      </ContentList>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
