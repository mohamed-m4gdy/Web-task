<template>
  <div class="cursor-pointer">
    <div class="drop-down-container w-[48px] h-[48px] border border-primary flex items-center justify-center rounded-full overflow-hidden">
      <UDropdown
        :items="items"
        :popper="{ placement: 'bottom-start' }"
        click="hover"
      >
        <div v-if="locale === 'ar'">
          <img src="~/assets/images/header/ar.png" class="w-full h-[70px] rounded-full" loading="lazy" />
        </div>
        <div v-else>
          <img src="~/assets/images/header/en.png" class="w-full h-[100px] rounded-full" loading="lazy" />
        </div>

        <template #ar="{ item }" class="w-fit">
          <div @click="setLanguageAttributes(item.label)">
            <img src="~/assets/images/header/ar.png" alt="Ar Flag" class="w-[30px]" loading="lazy" />
          </div>
        </template>
        <template #en="{ item }" class="w-fit">
          <div @click="setLanguageAttributes(item.label)">
            <img src="~/assets/images/header/en.png" alt="En Flag" class="w-[30px]" loading="lazy" />
          </div>
        </template>
      </UDropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const router = useRouter()

// Drop down items
const items = [
  [{
    label: 'ar',
    slot: 'ar',
  }],
  [{
    label: 'en',
    slot: 'en',
  }],
]

// Apply the correct `dir` attribute for CSR
const setLanguageAttributes = (lang: string) => {
  // Get the path to switch the locale
  const path = switchLocalePath(lang)
  
  // Navigate to the new locale path
  if (path) {
    router.push(path)
  }
  
  // Apply direction and language attributes to the <html> tag
  const direction = lang === 'ar' ? 'rtl' : 'ltr'
  useHead({
    htmlAttrs: {
      lang: lang,
      dir: direction
    }
  })
}
</script>