// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            50: '#eef2ff',
            100: '#e0e7ff',
            200: '#c7d2fe',
            300: '#a5b4fc',
            400: '#818cf8',
            500: '#6366f1',
            600: '#4f46e5',
            700: '#4338ca',
            800: '#3730a3',
            900: '#312e81',
          },
        },
        typography: (theme) => ({
          DEFAULT: {
            css: {
              a: {
                color: theme('colors.blue.600'),
                '&:hover': {
                  color: theme('colors.blue.700'),
                },
              },
            },
          },
          dark: {
            css: {
              color: theme('colors.gray.300'),
              a: {
                color: theme('colors.blue.400'),
                '&:hover': {
                  color: theme('colors.blue.300'),
                },
              },
              h1: {
                color: theme('colors.white'),
              },
              h2: {
                color: theme('colors.white'),
              },
              h3: {
                color: theme('colors.white'),
              },
              h4: {
                color: theme('colors.white'),
              },
              h5: {
                color: theme('colors.white'),
              },
              h6: {
                color: theme('colors.white'),
              },
              strong: {
                color: theme('colors.white'),
              },
              code: {
                color: theme('colors.white'),
              },
              blockquote: {
                color: theme('colors.gray.300'),
              },
            },
          },
        }),
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
    ],
  }