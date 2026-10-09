/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#FAFAF9', // warm off-white
          light: '#FFFFFF',
          subtle: '#F4F4F5',  // very light grey
          dark: '#18181B',
        },
        charcoal: {
          50: '#F4F4F5',
          100: '#E4E4E7',
          200: '#D4D4D8',
          400: '#71717A',
          600: '#3F3F46',
          700: '#27272A',
          800: '#1E2022',
          900: '#18181B',
          DEFAULT: '#18181B', // main text dark charcoal
        },
        accent: {
          50: '#EEF2FF',
          100: '#E0E7FF',
          500: '#3B82F6',
          600: '#2563EB', // electric blue
          700: '#1D4ED8',
          800: '#1E40AF',
          DEFAULT: '#2563EB',
        },
        indigoAccent: {
          DEFAULT: '#4F46E5', // deep indigo
          dark: '#4338CA',
          light: '#6366F1',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        subtle: '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)',
        card: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.04)',
      }
    },
  },
  plugins: [],
}
