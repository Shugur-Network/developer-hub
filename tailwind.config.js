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
        display: ['League Spartan', 'ui-sans-serif', 'system-ui'],
        body: ['Roboto', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: []
};
