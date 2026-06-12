/** Tailwind config for building tailwind.css (used by index.html).
 * Rebuild with: npx tailwindcss@3 -i tailwind.input.css -o tailwind.css --minify
 */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] },
      colors: {
        ink: {
          900: '#0a0e12',
          800: '#0e1419',
          700: '#141b22',
          600: '#1c2630',
        },
        // App brand — AppColors.accent #2D6BFF
        brand: {
          accent: '#2d6bff',
          glow: '#4f86ff',
        },
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
      },
    },
  },
};
