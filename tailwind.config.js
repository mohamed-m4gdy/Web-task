/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        'gamboge': {
          '50': '#fefaec',
          '100': '#fbf1ca',
          '200': '#f7e390',
          '300': '#f3cf56',
          '400': '#f0bc2f',
          '500': '#eaa121',
          '600': '#ce7811',
          '700': '#ab5512',
          '800': '#8b4315',
          '900': '#733714',
          '950': '#421c06',
        },
        lightPrimary: '#F0A41F',
        secondary: '#183867',
        bgColor: '#F3F7FC',
        greyColor: '#333333',
        lightGrey: '#8F8F8F',
        'light-grey-600': '#636363',
        lightColor: '#7C8DB0',
        lightTextColor: '#6E7491',
        mobileBorder: '#06162D40',
        lightBg: '#EAA12112',
      },
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
        play: ["Playfair Display", "serif"],
        Lato: ["Lato", "sans-serif"],
        nun: ["Nunito Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
