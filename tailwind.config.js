/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},colors:{
        'waikawa-gray': {
        '50': '#f2f7fb',
        '100': '#e7f0f8',
        '200': '#d3e2f2',
        '300': '#b9cfe8',
        '400': '#9cb6dd',
        '500': '#839dd1',
        '600': '#6a7fc1',
        '700': '#6374ae',
        '800': '#4a5989',
        '900': '#414e6e',
        '950': '#262c40',
        'black': {
        '50': '#f6f6f6',
        '100': '#e7e7e7',
        '200': '#d1d1d1',
        '300': '#b0b0b0',
        '400': '#888888',
        '500': '#6d6d6d',
        '600': '#5d5d5d',
        '700': '#4f4f4f',
        '800': '#454545',
        '900': '#3d3d3d',
        '950': '#000000',
      },
    },
  }
  },
  plugins: [],
}