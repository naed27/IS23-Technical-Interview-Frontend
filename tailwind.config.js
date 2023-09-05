import { fontFamily } from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */

export const darkMode = ['class']

export const content = ['./src/app/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}']

export const theme = {
  container: {
    center: true,
    padding: '2rem',
    screens: { '2xl': '1400px' },
  },

  cube:{
    position: 'relative',
    width: '200px',
    height: '200px',
    'transform-style': 'preserve-3d',
    animation: 'rotate 5s infinite linear',
  },

  extend: {
    height:{
      mobile: ['100svh']
    },
    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
    },
    colors: {
      
      border: 'hsl(var(--border) / <alpha-value>)',
      input: 'hsl(var(--input) / <alpha-value>)',
      ring: 'hsl(var(--ring) / <alpha-value>)',
      background: 'hsl(var(--background) / <alpha-value>)',
      foreground: 'hsl(var(--foreground) / <alpha-value>)',

      primary: {
        DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
        foreground: 'hsl(var(--primary-foreground) / <alpha-value>)',
      },
      secondary: {
        DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
        foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)',
      },
      destructive: {
        DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
        foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)',
      },
      muted: {
        DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
        foreground: 'hsl(var(--muted-foreground) / <alpha-value>)',
      },
      accent: {
        DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
        hover: "hsl(var(--accent-hover) / <alpha-value>)",
        foreground: 'hsl(var(--accent-foreground) / <alpha-value>)',
      },
      popover: {
        DEFAULT: 'hsl(var(--popover) / <alpha-value>)',
        foreground: 'hsl(var(--popover-foreground) / <alpha-value>)',
      },
      card: {
        DEFAULT: 'hsl(var(--card) / <alpha-value>)',
        foreground: 'hsl(var(--card-foreground) / <alpha-value>)',
      },

    },
    borderRadius: {
      lg: `var(--radius)`,
      md: `calc(var(--radius) - 2px)`,
      sm: 'calc(var(--radius) - 4px)',
    },
    fontFamily: {
      sans: ['var(--font-sans)', ...fontFamily.sans],
    },

    keyframes: {
      '3d-spin': {
        '0%': { transform: 'rotateX(0) rotateY(0) rotateZ(0)' },
        '100%': { transform: 'rotateX(360deg) rotateY(360deg) rotateZ(360deg)' },
      },

      'peek-slide-up': {
        '0%': { transform: 'translateY(100%)' },
        '10%': { transform: 'translateY(70%)' },
        '20%': { transform: 'translateY(70%)' },
        '30%': { transform: 'translateY(100%)' },
        '55%': { transform: 'translateY(100%)' },
        '65%': { transform: 'translateY(75%)' },
        '80%': { transform: 'translateY(75%)' },
        '100%': { transform: 'translateY(0)' },
      },

      'slide-up': {
        '0%': { transform: 'translateY(100%)' },
        '100%': { transform: 'translateY(0)' },
      },
      'slide-down': {
        '0%': { transform: 'translateY(-100%)' },
        '100%': { transform: 'translateY(0)' },
      },
      'slide-left': {
        '0%': { transform: 'translateX(100%)' },
        '100%': { transform: 'translateX(0)' },
      },
      'slide-right': {
        '0%': { transform: 'translateX(-100%)' },
        '100%': { transform: 'translateX(0)' },
      },
      'slide-up-offscreen': {
        '0%': { transform: 'translateY(0%)' },
        '100%': { transform: 'translateY(-100%)' },
      },
      'slide-down-offscreen': {
        '0%': { transform: 'translateY(0%)' },
        '100%': { transform: 'translateY(100%)' },
      },
      'slide-left-offscreen': {
        '0%': { transform: 'translateX(0%)' },
        '100%': { transform: 'translateX(-100%)' },
      },
      'slide-right-offscreen': {
        '0%': { transform: 'translateX(0%)' },
        '100%': { transform: 'translateX(100%)' },
      },
      'full-spin-left': {
        '0%': { transform: 'rotate(0)' },
        '100%': { transform: 'rotate(-360deg)' },
      },
      'full-spin-right': {
        '0%': { transform: 'rotate(0)' },
        '100%': { transform: 'rotate(360deg)' },
      },
      'half-spin-left': {
        '0%': { transform: 'rotate(0)' },
        '100%': { transform: 'rotate(-180deg)' },
      },
      'half-spin-right': {
        '0%': { transform: 'rotate(0)' },
        '100%': { transform: 'rotate(180deg)' },
      },
      'scale': {
        '0%': { transform: 'scale(0)'},
        '100%': { transform: 'scale(1)'},
      },
      'bounce-down': {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-20px)' },
      },
      'bounce-up': {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(20px)' },
      },
      'fade-in': {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
      },
      'fade-out': {
        '0%': { opacity: 1 },
        '100%': { opacity: 0 },
      },
    
      'flatten-bottom-borders': {
        '0%': { borderBottomLeftRadius: '100%', borderBottomRightRadius: '100%' },
        '100%': { borderBottomLeftRadius: '0%', borderBottomRightRadius: '0%' },
      },

      'round-bottom-borders': {
        '0%': { borderBottomLeftRadius: '0%', borderBottomRightRadius: '0%' },
        '100%': { borderBottomLeftRadius: '100%', borderBottomRightRadius: '100%' },
      },
      
      'extend': {
        '0%': { height: '0%' },
        '100%': { height: '100%' },
      },

      'retract': {
        '0%': { height: '100%' },
        '100%': { height: '0%' },
      },

      'wiggle': {
        '0%, 100%': { transform: 'rotate(-3deg)' },
        '50%': { transform: 'rotate(3deg)' },
      },

      'wiggle-more': {
        '0%, 100%': { transform: 'rotate(-6deg)' },
        '50%': { transform: 'rotate(6deg)' },
      },


      'shake-sideways': {
        '0%': { transform: 'translateX(0)' },
        '25%': { transform: 'translateX(-5px)' },
        '50%': { transform: 'translateX(5px)' },
        '75%': { transform: 'translateX(-5px)' },
        '100%': { transform: 'translateX(0)' },
      },

      'rotate-y': {
        '0%': { transform: 'rotateY(0)' },
        '50%': { transform: 'rotateY(180deg)' },
        '100%': { transform: 'rotateY(360deg)' },
      },

      'rotate-x': {
        '0%': { transform: 'rotateX(0)' },
        '50%': { transform: 'rotateX(180deg)' },
        '100%': { transform: 'rotateX(360deg)' },
      },

      'bounce-2': {
        '0%, 100%': {
          transform: 'translateY(0%);',
          'animation-timing-function': 'cubic-bezier(0.8,0,1,1);'
        },
        '50%': {
          transform: 'translateY(25%);',
          'animation-timing-function': 'cubic-bezier(0,0,0.2,1)'
        }
      },

      'typewriter': {
        '0%, 100%': { width: '100%' },
        '50%': { width: 0 },
      },

      'fill-vanish': {
        '0%': { fill: '#000' },
        '100%': { fill: 'transparent' },
      },

      'round-corners':{
        '0%': {
          borderBottomLeftRadius: '0%', 
          borderBottomRightRadius: '0%',
          borderTopRightRadius: '0%',
          borderTopLeftRadius: '0%',
        },
        '100%': { 
          borderBottomLeftRadius: '100%', 
          borderBottomRightRadius: '100%',
          borderTopRightRadius: '100%',
          borderTopLeftRadius: '100%', 
        },
      },

      'skew': {
        '0%': { transform: 'none' },
        '100%': { transform: 'skewX(10deg)' },
      },

      'bouncez': {
        '0%, 100%': { transform: 'scale(1)' },
        '60%': { transform: 'scale(0)' },
      },

      'swipe-top': {
        '0%, 100%': { transform: 'translateY(200%)' },
        '80%': { transform:  'translateY(-200%)' },
      },

      'swipe-left': {
        '0%, 56%': { opacity:  0, transform: 'translateX(200%)' },
        '10%, 45%, 90%': { opacity:  1 },
        '30%, 70%': { opacity:  1, transform: 'translateX(200%)' },
        '55%, 95%': { opacity:  0, transform:  'translateX(-200%)' },
        '100%': { opacity:  0, transform:  'translateX(-200%)' },
      },

      'ping-2': {
        '0%': { transform: 'scale(1)', opacity: 0 },
        '1%': { transform: 'scale(1)', opacity: 1 },
        '75%, 100%': { transform: 'scale(2)', opacity: 0 }
      },

      'slide-down-ball-and-flatten': {
        '0%': { transform: 'translateY(-100%)', borderBottomLeftRadius: '100%', borderBottomRightRadius: '100%' },
        '50%': { borderBottomLeftRadius: '90%', borderBottomRightRadius: '90%'},
        '75%': { transform: 'translateY(0)' },
        '100%': { transform: 'translateY(0)', borderBottomLeftRadius: '0%', borderBottomRightRadius: '0%' }
      },

      'slide-up-ball-and-flatten': {
        '0%': { transform: 'translateY(0)', borderBottomLeftRadius: '0', borderBottomRightRadius: '0' },
        '25%': { transform: 'translateY(0)' },
        '50%': { borderBottomLeftRadius: '90%', borderBottomRightRadius: '90%'},
        '100%': { transform: 'translateY(-100%)', borderBottomLeftRadius: '100%', borderBottomRightRadius: '100%' }
      },
    },
    animation: {
      'fade-in': 'fade-in 1s ease-out',
      'fade-out': 'fade-out 1s ease-out',
      'scale': 'scale 0.5s ease-out',
      'slide-up-1s': 'slide-up 1s ease-out',
      'slide-down-1s': 'slide-down 1s ease-out',
      'slide-left-1s': 'slide-left 1s ease-out',
      'slide-right-1s': 'slide-right 1s ease-out',
      'bounce-down': 'bounce-down 0.5s ease-in-out infinite',
      'bounce-up': 'bounce-up 0.5s ease-in-out infinite',
      'slide-up-with-fade-1s': 'slide-up 1s ease-out 0.1s, fade-in 1s ease-out forwards',
      'slide-down-with-fade-1s': 'slide-down 1s ease-out 0.1s, fade-in 1s ease-out forwards',
      'slide-left-with-fade-1s': 'slide-left 1s ease-out, fade-in 1s ease-out',
      'slide-right-with-fade-1s': 'slide-right 1s ease-out, fade-in 1s ease-out',
      'spin-left-infinitely': 'full-spin-left 1s linear infinite',
      'spin-right-infinitely': 'full-spin-right 1s linear infinite',
      'spin-right-5s': 'full-spin-right 1s linear infinite' ,
      'surprise':'bouncez 0.8s ease-in-out forwards, wiggle-more 0.2s linear 0.8s 3',
      'slide-up-loop':'slide-up-offscreen 0.3s ease-out, slide-up 0.3s ease-out 0.3s',
      'slide-down-settings': 'slide-down 0.7s ease-out forwards, flatten-bottom-borders 1s ease-out 0.6s forwards',
      'slide-up-settings': 'slide-up-offscreen 0.7s ease-out forwards, round-bottom-borders 0.8s ease-out forwards',
      'spin-cube': '3d-spin 5s linear infinite'
    },
  },
}

// eslint-disable-next-line no-undef
export const plugins = [require('tailwindcss-animate'), require('@tailwindcss/typography')]
