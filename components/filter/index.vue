<template>
  <div class="relative top-0">
    <img class="w-full h-full absolute top-0 left-0 z-[-1] opacity-10" src="~/assets/images/header/asia-map.png" alt="Asia" loading="lazy" />
    <div class="font-play font-bold text-center text-[24px] sm:text-[32px] md:text-[46px] xl:text-[56px] pt-[4%] sm:pt-[10%] gradiant-text">
      {{ $t('Discover Our Paradise Worlds') }},<br/>
      {{ $t('Travel Anywhere Now') }}!
    </div>
    <FilterSearch />
  </div>
</template>
<script setup lang="ts">
const { t: $t } = useI18n()
</script>