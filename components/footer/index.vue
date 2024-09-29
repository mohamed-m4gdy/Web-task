<template>
  <div class="bg-white pb-10">
    <div class="container mx-auto sm:px-[30px] px-[15px]">
      <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 pt-14">
        <img src="~/assets/images/logo.png" alt="Logo" loading="lazy" />
        <div>
          <h2 class="font-nun font-bold text-lg text-lightTextColor">{{ $t('About') }}</h2>
          <div class="flex flex-col gap-2 mt-4">
            <ULink 
              active-class="text-secondary font-base font-nun transition-all duration-500"
              inactive-class="text-lightColor hover:text-secondary font-base font-nun transition-all duration-500"
              :to="localePath(`/about/gooseflight`)"
              disabled
            >
              {{ $t('About GooseFlight') }}
            </ULink>
            <ULink 
              active-class="text-secondary font-base font-nun transition-all duration-500"
              inactive-class="text-lightColor hover:text-secondary font-base font-nun transition-all duration-500"
              :to="localePath(`/how`)"
              disabled
            >
              {{ $t('How it works') }}
            </ULink>
            <ULink 
              active-class="text-secondary font-base font-nun transition-all duration-500"
              inactive-class="text-lightColor hover:text-secondary font-base font-nun transition-all duration-500"
              :to="localePath(`/blog`)"
              disabled
            >
              {{ $t('Blog') }}
            </ULink>
            <ULink 
              active-class="text-secondary font-base font-nun transition-all duration-500"
              inactive-class="text-lightColor hover:text-secondary font-base font-nun transition-all duration-500"
              :to="localePath(`/forum`)"
              disabled
            >
              {{ $t('Forum') }}
            </ULink>
          </div>
        </div>
        <div>
          <h2 class="font-nun font-bold text-lg text-lightTextColor">{{ $t('Support') }}</h2>
          <div class="flex flex-col gap-2 mt-4">
            <ULink 
              active-class="text-secondary font-base font-nun transition-all duration-500"
              inactive-class="text-lightColor hover:text-secondary font-base font-nun transition-all duration-500"
              :to="localePath(`/about/gooseflight`)"
              disabled
            >
              {{ $t('Help Center') }}
            </ULink>
            <ULink 
              active-class="text-secondary font-base font-nun transition-all duration-500"
              inactive-class="text-lightColor hover:text-secondary font-base font-nun transition-all duration-500"
              :to="localePath(`/how`)"
              disabled
            >
              {{ $t('Contact us') }}
            </ULink>
            <ULink 
              active-class="text-secondary font-base font-nun transition-all duration-500"
              inactive-class="text-lightColor hover:text-secondary font-base font-nun transition-all duration-500"
              :to="localePath(`/blog`)"
              disabled
            >
              {{ $t('Privacy policy') }}
            </ULink>
            <ULink 
              active-class="text-secondary font-base font-nun transition-all duration-500"
              inactive-class="text-lightColor hover:text-secondary font-base font-nun transition-all duration-500"
              :to="localePath(`/forum`)"
              disabled
            >
              {{ $t('Terms of service') }}
            </ULink>
            <ULink 
              active-class="text-secondary font-base font-nun transition-all duration-500"
              inactive-class="text-lightColor hover:text-secondary font-base font-nun transition-all duration-500"
              :to="localePath(`/forum`)"
              disabled
            >
              {{ $t('Trust and safety') }}
            </ULink>
            <ULink 
              active-class="text-secondary font-base font-nun transition-all duration-500"
              inactive-class="text-lightColor hover:text-secondary font-base font-nun transition-all duration-500"
              :to="localePath(`/forum`)"
              disabled
            >
              {{ $t('Accessibility') }}
            </ULink>
          </div>
        </div>
        <div>
          <h2 class="font-nun font-bold text-lg text-lightTextColor">{{ $t('Get the app') }}</h2>
          <div class="flex flex-col gap-2 mt-4">
            <ULink 
              active-class="text-secondary font-base font-nun transition-all duration-500"
              inactive-class="text-lightColor hover:text-secondary font-base font-nun transition-all duration-500"
              :to="localePath(`/about/gooseflight`)"
              disabled
            >
              {{ $t('Tripma for Android') }}
            </ULink>
            <ULink 
              active-class="text-secondary font-base font-nun transition-all duration-500"
              inactive-class="text-lightColor hover:text-secondary font-base font-nun transition-all duration-500"
              :to="localePath(`/how`)"
              disabled
            >
              {{ $t('Tripma for iOS') }}
            </ULink>
            <ULink 
              active-class="text-secondary font-base font-nun transition-all duration-500"
              inactive-class="text-lightColor hover:text-secondary font-base font-nun transition-all duration-500"
              :to="localePath(`/blog`)"
              disabled
            >
              {{ $t('Mobile site') }}
            </ULink>
            <ULink 
              active-class="text-secondary font-base font-nun transition-all duration-500 mt-4"
              inactive-class="text-lightColor hover:text-secondary font-base font-nun transition-all duration-500 mt-4"
              :to="localePath(`/forum`)"
              disabled
            >
              <img src="~/assets/images/icons/app.png" alt="Apple store" loading="lazy" />
            </ULink>
            <ULink 
              active-class="text-secondary font-base font-nun transition-all duration-500"
              inactive-class="text-lightColor hover:text-secondary font-base font-nun transition-all duration-500"
              :to="localePath(`/forum`)"
              disabled
            >
              <img src="~/assets/images/icons/google.png" alt="Google play" loading="lazy" />
            </ULink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>