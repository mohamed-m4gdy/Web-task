<template>
  <div class="md:pb-40 pb-14">
    <div class="bg-white rounded-[16px] sm:rounded-lg p-5 sm:p-8 searchContainer sm:mt-20 mt-6 border border-mobileBorder">
      <div class="w-full flex items-center justify-center border-b pb-4 border-secondary sm:border-primary">
        <div class="sm:block hidden">
          <URadioGroup
            v-model="radioSelected"
            :options="radioOptions"
          >
            <template #label="{ option }">
              <p class="font-semibold font-mont">{{ option.name }}</p>
            </template>
          </URadioGroup>
        </div>
        <div class="block sm:hidden u-select">
          <USelect
            :options="radioOptions"
            v-model="fromSelected"
            option-attribute="name"
            color="greyColor"
          />
        </div>
      </div>
      <div class="mt-10 flex items-center justify-between flex-wrap gap-5">
        <div class="reset-container w-full sm:w-auto">
          <div class="flex items-center gap-2 sm:mb-4 min-h-[40px]">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25.906 6.78139C26.031 6.77339 26.16 6.77739 26.281 6.81339C26.4703 6.86618 26.6394 6.97471 26.7661 7.12489C26.8929 7.27506 26.9716 7.45991 26.9918 7.65539C27.0121 7.85088 26.9731 8.04794 26.8799 8.22094C26.7866 8.39394 26.6434 8.53487 26.469 8.62539L20.875 11.6564L20.562 11.8124L20.437 12.1564L16.719 21.0944L16.281 21.2814L17.344 15.3754L17.719 13.3444L15.906 14.3134L9.594 17.7194L5.625 13.4064L5.781 13.3124L9.438 14.9384L9.906 15.1564L10.312 14.9064L25.532 6.87539C25.6483 6.81698 25.7759 6.78489 25.906 6.78139Z" fill="#EAA121"/>
              <path d="M13.375 8.09439L17.219 9.03139L15.156 10.0944L12.906 8.37539L13.375 8.09439Z" fill="#EAA121"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M3 28.0004V26.0004H29V28.0004H3Z" fill="#EAA121"/>
            </svg>
            <div class="font-mont font-bold">{{ $t('From') }}</div>
          </div>
          <UInputMenu
            v-model="fromSelected"
            :options="fromData"
            :placeholder="`${$t('Flight from')}`"
            :popper="{ placement: locale === 'ar' ? 'bottom-start' : 'bottom-end' }"
          />
        </div>
        <div class="reset-container to w-full sm:w-auto">
          <div class="flex items-center gap-2 sm:mb-4 min-h-[40px]">
            <svg width="27" height="22" viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.6558 2.40575L13.4688 2.62475L15.9058 6.59375L13.0938 5.74975L12.6558 2.40575Z" fill="#EAA121"/>
              <path d="M3.03075 0.62475L3.46875 0.74975L5.06175 4.93775L5.21875 5.40575L5.68675 5.53075L23.8748 11.1558C24.0278 11.1989 24.1707 11.2723 24.295 11.3717C24.4192 11.471 24.5222 11.5942 24.598 11.7341C24.6738 11.8739 24.7208 12.0275 24.7362 12.1858C24.7516 12.3441 24.7352 12.5039 24.6878 12.6558C24.6446 12.8088 24.5712 12.9517 24.4718 13.076C24.3725 13.2002 24.2493 13.3032 24.1095 13.379C23.9696 13.4548 23.816 13.5018 23.6577 13.5172C23.4994 13.5326 23.3396 13.5162 23.1878 13.4688L16.4378 11.4368L16.0938 11.3438L15.7808 11.4688L5.84375 15.6248L5.09375 15.3118L10.7188 11.4368L12.4378 10.2498L10.4378 9.65575L2.78075 7.34375L3.03075 0.62475Z" fill="#EAA121"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M17.1891 15.4391C17.4704 15.1578 17.8519 14.9998 18.2498 14.9998C18.6476 14.9998 19.0291 15.1578 19.3104 15.4391C19.5917 15.7204 19.7498 16.1019 19.7498 16.4998C19.7498 16.8976 19.5917 17.2791 19.3104 17.5604C19.0291 17.8417 18.6476 17.9998 18.2498 17.9998C17.8519 17.9998 17.4704 17.8417 17.1891 17.5604C16.9078 17.2791 16.7498 16.8976 16.7498 16.4998C16.7498 16.1019 16.9078 15.7204 17.1891 15.4391ZM0.74975 21.9998V19.9998H26.7498V21.9998H0.74975Z" fill="#EAA121"/>
            </svg>
            <div class="font-mont font-bold">{{ $t('To') }}</div>
          </div>
          <UInputMenu
            v-model="toSelected"
            :options="toData"
            :placeholder="`${$t('Where to')}`"
            :popper="{ placement: locale === 'ar' ? 'bottom-start' : 'bottom-end' }"
          />
        </div>
        <div class="w-full sm:w-auto">
          <div class="flex items-center gap-2 sm:mb-4 min-h-[40px]">
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.5 0V1H0.5V23H22.5V1H18.5V0H16.5V1H6.5V0H4.5ZM2.5 3H4.5V4H6.5V3H16.5V4H18.5V3H20.5V5H2.5V3ZM2.5 7H20.5V21H2.5V7ZM8.5 9V11H10.5V9H8.5ZM12.5 9V11H14.5V9H12.5ZM16.5 9V11H18.5V9H16.5ZM11.5 12V16H15.5V12H11.5ZM4.5 13V15H6.5V13H4.5ZM8.5 13V15H10.5V13H8.5ZM16.5 13V15H18.5V13H16.5ZM4.5 17V19H6.5V17H4.5ZM8.5 17V19H10.5V17H8.5ZM12.5 17V19H14.5V17H12.5Z" fill="#EAA121"/>
            </svg>
            <div class="font-mont font-bold">{{ $t('Depart') }}</div>
          </div>
          <ClientOnly>
            <v-date-picker v-model="departDate">
              <template v-slot="{ inputValue, inputEvents }">
                <input
                  class="bg-white font-mont rounded focus:outline-none placeholder:text-lightColor"
                  :value="inputValue"
                  :placeholder="$t('DD/MM/YYYY')"
                  v-on="inputEvents"
                />
              </template>
            </v-date-picker>
          </ClientOnly>
        </div>
        <div v-if="radioSelected !== 'one'" class="w-full sm:w-auto">
          <div class="flex items-center gap-2 sm:mb-4 min-h-[40px]">
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.5 0V1H0.5V23H22.5V1H18.5V0H16.5V1H6.5V0H4.5ZM2.5 3H4.5V4H6.5V3H16.5V4H18.5V3H20.5V5H2.5V3ZM2.5 7H20.5V21H2.5V7ZM8.5 9V11H10.5V9H8.5ZM12.5 9V11H14.5V9H12.5ZM16.5 9V11H18.5V9H16.5ZM11.5 12V16H15.5V12H11.5ZM4.5 13V15H6.5V13H4.5ZM8.5 13V15H10.5V13H8.5ZM16.5 13V15H18.5V13H16.5ZM4.5 17V19H6.5V17H4.5ZM8.5 17V19H10.5V17H8.5ZM12.5 17V19H14.5V17H12.5Z" fill="#EAA121"/>
            </svg>
            <div class="font-mont font-bold">{{ $t('Return') }}</div>
          </div>
          <ClientOnly>
            <v-date-picker v-model="returnDate">
              <template v-slot="{ inputValue, inputEvents }">
                <input
                  class="bg-white font-mont rounded focus:outline-none placeholder:text-lightColor"
                  :value="inputValue"
                  :placeholder="$t('DD/MM/YYYY')"
                  v-on="inputEvents"
                />
              </template>
            </v-date-picker>
          </ClientOnly>
        </div>
        <div class="adult-container w-full sm:w-auto">
          <div class="flex items-center gap-2 sm:mb-4 min-h-[40px]">
            <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.13268 5.52047C3.93268 4.66714 3.63935 3.01381 4.47935 1.80047C5.31935 0.600473 6.98602 0.307139 8.19935 1.14714C9.39935 2.00047 9.69268 3.65381 8.85268 4.86714C7.99935 6.06714 6.34602 6.36047 5.13268 5.52047ZM19.3327 23.3338H9.90602C7.93268 23.3338 6.25268 21.8938 5.95935 19.9471L3.33268 7.33381H0.666016L3.31935 20.3471C3.56428 21.9218 4.36408 23.357 5.57438 24.3938C6.78469 25.4305 8.32574 26.0003 9.91935 26.0005H19.3327V23.3338ZM19.6393 18.0005H13.1327L11.7593 12.5338C13.866 13.7205 16.1327 14.5871 18.626 14.1605V11.3205C16.4527 11.7338 14.0393 10.9605 12.3727 9.65381L10.186 7.96047C9.87935 7.72047 9.53268 7.56047 9.17268 7.45381C8.74443 7.32748 8.29306 7.30012 7.85268 7.37381H7.82602C7.04086 7.5132 6.34254 7.95709 5.88307 8.60884C5.42359 9.2606 5.24016 10.0675 5.37268 10.8538L7.17268 18.7471C7.34856 19.6618 7.83728 20.4867 8.55498 21.0803C9.27269 21.6739 10.1746 21.9993 11.106 22.0005H20.2393L25.3327 26.0005L27.3327 24.0005L19.6393 18.0005Z" fill="#EAA121"/>
            </svg>
            <div class="font-mont font-bold">{{ $t('Cabin Class & Travelers') }}</div>
          </div>
          <ClientOnly>
            <USelectMenu
              v-model="classSelected"
              :options="classData"
              :placeholder="$t('1 adult, Economy')"
            >
            </USelectMenu>
          </ClientOnly>
        </div>
        <div class="sm:w-auto w-full mt-4 sm:mt-0">
          <UButton class="w-full sm:w-[64px] h-[48px] flex items-center justify-center bg-secondary sm:bg-primary">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 18C11.775 17.9996 13.4988 17.4054 14.897 16.312L19.293 20.708L20.707 19.294L16.311 14.898C17.405 13.4997 17.9996 11.7754 18 10C18 5.589 14.411 2 10 2C5.589 2 2 5.589 2 10C2 14.411 5.589 18 10 18ZM10 4C13.309 4 16 6.691 16 10C16 13.309 13.309 16 10 16C6.691 16 4 13.309 4 10C4 6.691 6.691 4 10 4Z" fill="white"/>
              <path d="M11.412 8.58599C11.791 8.96599 12 9.46799 12 9.99999H14C14.0009 9.47442 13.8976 8.95389 13.6961 8.46848C13.4946 7.98307 13.1989 7.54242 12.826 7.17199C11.312 5.65999 8.68701 5.65999 7.17401 7.17199L8.58601 8.58799C9.34601 7.82999 10.656 7.832 11.412 8.58599Z" fill="white"/>
            </svg>
            <div class="font-mont text-lg sm:hidden block">{{ $t('Search') }}</div>
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import adult from '~/assets/images/icons/adult.png'
const { t: $t, locale } = useI18n()


// Radio Options
const radioOptions = [
  { value: 'one', name: $t('One Way') },
  { value: 'round', name: $t('Round Trip') }
]
const radioSelected = ref('round')
//////

// Selected From country
const fromData = ['Egypt', 'KSA', 'USA']
const fromSelected = ref('')
///////

// Selected to country
const toData = ['Egypt', 'KSA', 'USA']
const toSelected = ref('')
///////

// Selected class
const classData = [{
    id: '1',
    label: $t('1 adult, Economy'),
    avatar: { src: adult }
  },
  {
    id: '2',
    label: $t('2 adult, Class'),
    avatar: { src: adult }
  },
  {
    id: '3',
    label: $t('2 adult, Economy'),
    avatar: { src: adult }
  }
]
const classSelected = ref()

// dates 
const departDate = ref()
const returnDate = ref()
</script>