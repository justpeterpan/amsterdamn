<template>
  <ContentList v-slot="{ list }" path="/posts">
    <NuxtLink v-for="post in list" :key="post.title" class="relative" :to="post['_path']">
      <div
        class="absolute drop-shadow-block flex items-center justify-center z-20 h-12 w-12 bg-yellow-300 border-2 border-slate-800 text-slate-800"
      >
        <div>
          {{ post.day }}
        </div>
      </div>
      <p class="ml-16 text-lg leading-6 font-medium text-gray-900">{{ post.title }}</p>
      <section class="mt-1 ml-16 text-base text-gray-500">
        {{ post.description }}
      </section>
    </NuxtLink>
  </ContentList>
</template>
