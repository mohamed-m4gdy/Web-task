<template>
  <div class="pb-16">
    <div class="font-lato font-bold text-4xl text-secondary">{{ $t('Popular Destinations') }}</div>
    <div class="font-lato text-secondary mt-4">{{ $t('Vacations to make your experience enjoyable in Indonesia!') }}</div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
      <div class="border border-white blog-blur rounded-[16px] p-4 hover:border-lightPrimary hover:bg-lightBg transition ease-in-out duration-500">
        <img src="~/assets/images/blog/flores.png" class="w-full mb-4 ltr:rounded-tl-lg ltr:rounded-br-lg rtl:rounded-tr-lg rtl:rounded-bl-lg" alt="Flores" loading="lazy" />
        <div class="flex gap-2 items-center">
          <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 5.15888C2.25 2.85895 4.17194 1 6.49672 1C8.82806 1 10.75 2.85895 10.75 5.15888C10.75 6.31785 10.3285 7.39381 9.63475 8.30579C8.8694 9.31176 7.92608 10.1882 6.86427 10.8762C6.62126 11.0352 6.40194 11.0472 6.13522 10.8762C5.06737 10.1882 4.12404 9.31176 3.36525 8.30579C2.67099 7.39381 2.25 6.31785 2.25 5.15888ZM5.09711 5.28838C5.09711 6.05885 5.72583 6.66483 6.49672 6.66483C7.26812 6.66483 7.90289 6.05885 7.90289 5.28838C7.90289 4.5239 7.26812 3.88842 6.49672 3.88842C5.72583 3.88842 5.09711 4.5239 5.09711 5.28838Z" fill="#EAA121"/>
          </svg>
          <div class="font-lato text-lightGrey text-[10px]">{{ $t('Manggarai Barat') }}</div>
        </div>
        <div class="font-lato font-bold text-secondary mt-2">{{ $t('Flores Road Trip 3D2N') }}</div>
        <div class="font-lato text-[14px] text-light-grey-600 mt-2">{{ $t('3 Days') }}</div>
        <div class="font-lato text-[14px] font-bold text-primary mt-4">{{ $t('$375') }}</div>
      </div>
      <div class="border border-white blog-blur rounded-[16px] p-4 hover:border-lightPrimary hover:bg-lightBg transition ease-in-out duration-500">
        <img src="~/assets/images/blog/forrester.png" class="w-full mb-4 ltr:rounded-tl-lg ltr:rounded-br-lg rtl:rounded-tr-lg rtl:rounded-bl-lg" alt="Flores" loading="lazy" />
        <div class="flex gap-2 items-center">
          <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 5.15888C2.25 2.85895 4.17194 1 6.49672 1C8.82806 1 10.75 2.85895 10.75 5.15888C10.75 6.31785 10.3285 7.39381 9.63475 8.30579C8.8694 9.31176 7.92608 10.1882 6.86427 10.8762C6.62126 11.0352 6.40194 11.0472 6.13522 10.8762C5.06737 10.1882 4.12404 9.31176 3.36525 8.30579C2.67099 7.39381 2.25 6.31785 2.25 5.15888ZM5.09711 5.28838C5.09711 6.05885 5.72583 6.66483 6.49672 6.66483C7.26812 6.66483 7.90289 6.05885 7.90289 5.28838C7.90289 4.5239 7.26812 3.88842 6.49672 3.88842C5.72583 3.88842 5.09711 4.5239 5.09711 5.28838Z" fill="#EAA121"/>
          </svg>
          <div class="font-lato text-lightGrey text-[10px]">{{ $t('Bogor') }}</div>
        </div>
        <div class="font-lato font-bold text-secondary mt-2">{{ $t('Forrester Glamping Co Bogor') }}</div>
        <div class="font-lato text-[14px] text-light-grey-600 mt-2">{{ $t('1 Days') }}</div>
        <div class="font-lato text-[14px] font-bold text-primary mt-4">{{ $t('$375') }}</div>
      </div>
      <div class="border border-white blog-blur rounded-[16px] p-4 hover:border-lightPrimary hover:bg-lightBg transition ease-in-out duration-500">
        <img src="~/assets/images/blog/paket.png" class="w-full mb-4 ltr:rounded-tl-lg ltr:rounded-br-lg rtl:rounded-tr-lg rtl:rounded-bl-lg" alt="Flores" loading="lazy" />
        <div class="flex gap-2 items-center">
          <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 5.15888C2.25 2.85895 4.17194 1 6.49672 1C8.82806 1 10.75 2.85895 10.75 5.15888C10.75 6.31785 10.3285 7.39381 9.63475 8.30579C8.8694 9.31176 7.92608 10.1882 6.86427 10.8762C6.62126 11.0352 6.40194 11.0472 6.13522 10.8762C5.06737 10.1882 4.12404 9.31176 3.36525 8.30579C2.67099 7.39381 2.25 6.31785 2.25 5.15888ZM5.09711 5.28838C5.09711 6.05885 5.72583 6.66483 6.49672 6.66483C7.26812 6.66483 7.90289 6.05885 7.90289 5.28838C7.90289 4.5239 7.26812 3.88842 6.49672 3.88842C5.72583 3.88842 5.09711 4.5239 5.09711 5.28838Z" fill="#EAA121"/>
          </svg>
          <div class="font-lato text-lightGrey text-[10px]">{{ $t('Jakarta') }}</div>
        </div>
        <div class="font-lato font-bold text-secondary mt-2">{{ $t('Paket Tiket Pesawat Jakarta Bali') }}</div>
        <div class="font-lato text-[14px] font-bold text-primary mt-4">{{ $t('$375') }}</div>
      </div>
      <div class="border border-white blog-blur rounded-[16px] p-4 hover:border-lightPrimary hover:bg-lightBg transition ease-in-out duration-500">
        <img src="~/assets/images/blog/desa.png" class="w-full mb-4 ltr:rounded-tl-lg ltr:rounded-br-lg rtl:rounded-tr-lg rtl:rounded-bl-lg" alt="Flores" loading="lazy" />
        <div class="flex gap-2 items-center">
          <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 5.15888C2.25 2.85895 4.17194 1 6.49672 1C8.82806 1 10.75 2.85895 10.75 5.15888C10.75 6.31785 10.3285 7.39381 9.63475 8.30579C8.8694 9.31176 7.92608 10.1882 6.86427 10.8762C6.62126 11.0352 6.40194 11.0472 6.13522 10.8762C5.06737 10.1882 4.12404 9.31176 3.36525 8.30579C2.67099 7.39381 2.25 6.31785 2.25 5.15888ZM5.09711 5.28838C5.09711 6.05885 5.72583 6.66483 6.49672 6.66483C7.26812 6.66483 7.90289 6.05885 7.90289 5.28838C7.90289 4.5239 7.26812 3.88842 6.49672 3.88842C5.72583 3.88842 5.09711 4.5239 5.09711 5.28838Z" fill="#EAA121"/>
          </svg>
          <div class="font-lato text-lightGrey text-[10px]">{{ $t('Kota Semarang') }}</div>
        </div>
        <div class="font-lato font-bold text-secondary mt-2">{{ $t('Desa Wisata Kandri') }}</div>
        <div class="font-lato text-[14px] text-light-grey-600 mt-2">{{ $t('14 Days') }}</div>
        <div class="font-lato text-[14px] font-bold text-primary mt-4">{{ $t('$375') }}</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const { t: $t } = useI18n()
</script>