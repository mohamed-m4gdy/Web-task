<template>
  <NuxtLoadingIndicator color="primary" />
    <Header />
    <NuxtPage />
    <Footer />
</template>
<script setup lang="ts">
const { locale } = useI18n()

const i18nHead = useLocaleHead({
  addSeoAttributes: {
    canonicalQueries: ["foo"],
  },
});

useHead({
  htmlAttrs: {
    lang: i18nHead.value.htmlAttrs.lang,
    dir: i18nHead.value.htmlAttrs.lang === "ar" ? "rtl" : "ltr",
  },
});

// Apply the correct `dir` attribute for SSR
const setLanguageAttributes = (lang: string) => {
  const direction = lang === 'ar' ? 'rtl' : 'ltr'
  useHead({
    htmlAttrs: {
      lang: lang,
      dir: direction
    }
  })
}

// set the correct language attributes for SSR during server-side rendering
setLanguageAttributes(locale.value)
</script>