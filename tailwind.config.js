/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'brand-color-primary' : '#1077D6',
      'brand-color-secondary' : '#0B2850',
      'background-color-primary' : '#FAFDFF',
      'background-color-secondary' : '#FFFFFF',
      'background-color-tertiary' : '#B3C4DD',
      'btn-primary': '#1077D6',
      'btn-secondary' : '#0B2850',
      'btn-disable' : '#C6D0E5',
      'btn-placeholder' : '#B3C4DD',
      'text-primary' : '#0B2850',
      'text-secondary' : '#94A5BD',
      'text-highlight' : '#1077D6',
      'text-light' : '#FFFFFF',
      'text-disable' : '#C6D0E5',
      'icons-default' : '#0B2850',
      'icons-active' : '#1077D6',
      'icons-not-selected' : '#94A5BD',
      'icons-light' : '#FFFFFF',
      'icons-disable' : '#C6D0E5',
      'border-primary' : '#D0DEF9',
      'border-secondary' : '#B1C4E9',
      'border-tertiary' : '#ECF7FF',
      'border-active' : '#1077D6',
      'separator-primary' : '#CAE2F2',
      'separator-secondary' : '#E0E6F1',
      'highlights-primary' : '#F2F7FF',
      'highlights-secondary' : '#FFFFFF',
      'highlight-tertiary' : '#D0DEF9',
      'accent-1' : '#DE2E3A' ,
      'accent-2' : '#FF9518',
      'accent-3' : '#2466E7',
      'accent-4' : '#5019EC',
      'accent-5' : '#14D810',
    },
    extend: {
    },
  },
  plugins: [],
};
