<template>
  <div class="container mx-auto sm:px-[30px] px-[15px]">
    <div class="flex justify-end md:justify-between items-center py-6 flex-row-reverse md:flex-row">
      <div class="w-full md:hidden">
        <ULink :to="localePath(`/`)">
          <img class="block mx-auto" src="~/assets/images/logo.png" alt="Logo" loading="lazy"/>
        </ULink>
      </div>
      <ULink :to="localePath(`/`)">
        <img class="hidden md:block" src="~/assets/images/logo.png" alt="Logo" loading="lazy"/>
      </ULink>
      <div>
        <button class="relative h-[30px] mt-[9px] text-4xl z-[999999] font-bold md:hidden transition ease-in-out duration-1000" @click="nav = !nav">
          <div class="h-[30px]" id="nav-icon3" :class="{ 'open': nav }">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <div
          class="fixed flex items-start md:items-center md:justify-between flex-1 md:gap-8 transition-all duration-1000 z-[9999] md:static md:h-auto md:w-auto md:flex-row md:bg-transparent"
          :class="{
            'ps-[30px] md:h-auto h-full top-0 pt-[150px] md:pt-[0] right-0 w-[100%] flex-col bg-primary transition-all duration-1000 ': nav,
            'ps-[30px] right-[-1000px] transition-all top-[150px] duration-1000 h-full bg-primary flex-col w-[100%]': !nav,
          }" @click="nav = false">
          <div class="flex flex-col items-center gap-8 md:gap-4 lg:gap-12 md:flex-row mt-[10px] sm:mt-0">
            <ULink 
              active-class="text-primary font-bold font-base font-mont transition-all duration-500"
              inactive-class="text-greyColor font-base font-mont transition-all duration-500"
              :to="localePath(`/`)"
            >
              {{ $t('Home') }}
            </ULink>
            <ULink 
              active-class="text-primary font-bold font-base font-mont transition-all duration-500"
              inactive-class="text-greyColor font-base font-mont transition-all duration-500"
              :to="localePath(`/promo`)"
              disabled
            >
              {{ $t('Promo') }}
            </ULink>
            <ULink 
              active-class="text-primary font-bold font-base font-mont transition-all duration-500"
              inactive-class="text-greyColor font-base font-mont transition-all duration-500"
              :to="localePath(`/booking`)"
              disabled
            >
              {{ $t('My Booking') }}
            </ULink>
          </div>
        </div>
      </div>
      <div class="gap-6 items-center hidden md:flex">
        <div>
          <UButton
          class="rounded-lg py-3 px-6 font-semibold text-base font-mont"
          :label="$t('Sign In')"
          @click="isOpen = true"
          />
          
          <UModal v-model="isOpen">
            <div class="py-14 text-primary font-bold text-center text-2xl">
              {{ $t('Coming soon') }}
            </div>
          </UModal>
        </div>
        <ClientOnly>
          <HeaderLanguage />
        </ClientOnly>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const { t: $t } = useI18n()

let nav = ref(false)
const isOpen = ref(false)
const localePath = useLocalePath()

watch(nav, (value) => {
  if (value) {
    document.body.style.overflow = "hidden"
  } else {
    document.body.style.overflow = "auto"
  }
})
</script>
<style>
</style>
