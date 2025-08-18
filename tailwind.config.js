/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#36BA98',
        dark: '#1A1A1A',
        lightbg: '#FAFAFA'
      },
      fontFamily: {
        'brand': ['League Spartan', 'ui-sans-serif', 'system-ui'],
        'display': ['Inter', 'ui-sans-serif', 'system-ui'],
        'body': ['Inter', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: []
};
