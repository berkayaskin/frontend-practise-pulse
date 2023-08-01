const {
  fontFamily,
  lineHeight,
  letterSpacing,
} = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        '2xl': '1200px',
      },
    },
    fontFamily: {
      sans: ['var(--font-sans)', ...fontFamily.sans],
    },
    lineHeight: {
      ...lineHeight,
      tight: '1.15',
      snug: '1.3',
    },
    letterSpacing: {
      ...letterSpacing,
      tightest: '-2px',
      tighterer: '-1.5px',
      tighter: '-.5px',
      widest: '1px',
    },
    extend: {
      screens: {
        xs: '320px',
      },
      colors: {
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        text: 'var(--text)',
        pulse: {
          gray: {
            100: 'var(--gray-100)',
            200: 'var(--gray-200)',
            400: 'var(--gray-400)',
            500: 'var(--gray-500)',
            600: 'var(--gray-600)',
            700: 'var(--gray-700)',
            800: 'var(--gray-800)',
          },
          green: {
            100: 'var(--green-100)',
            200: 'var(--green-200)',
            300: 'var(--green-300)',
            400: 'var(--green-400)',
            800: 'var(--green-800)',
            'stop-color': 'var(--green-stop-color)',
          },
          blue: 'var(--blue)',
          red: 'var(--red)',
        },
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      transitionTimingFunction: {
        'mobile-nav': 'cubic-bezier(.645,.045,.355,1)',
      },
      transitionDuration: {
        55: '550ms',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
    require('tailwindcss-3d'),
  ],
}
