<template>
  <div  class="container mx-auto sm:px-[30px] px-[15px]">
    <Filter />
    <Blogs />
  </div>
</template>
<script setup lang="ts">
useSeoMeta({
  title: 'Home',
  ogTitle: 'Home',
  description: 'GooseFlight: Effortless travel booking at your fingertips.',
  ogDescription: 'GooseFlight: Effortless travel booking at your fingertips.',
  ogImage: '/favicon.png',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Home',
  twitterDescription: 'GooseFlight: Effortless travel booking at your fingertips.',
  twitterImage: '/favicon.png',
  ogUrl: 'https://gooseFlight.com',
  ogType: 'website',
})
</script>