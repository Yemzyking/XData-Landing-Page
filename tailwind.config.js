/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        brightTeal: 'hsl(186, 41%, 39%)',
        brightRedLight: 'hsl(12, 39%, 59%)',
        brightRedSupLight: 'hsl(12, 79%, 95%)',
        darkBlue: 'hsl(228, 42%, 23%)',
        darkGrayishBlue: 'hsl(227, 7%, 51%)',
        veryDarkBlue: 'hsl(233, 14%, 15%)',
        veryPaleRed: 'hsl(342, 76%, 87%)',
        veryLightGray: 'hsl(190, 37%, 84%)',
      },
    },
  },
  plugins: [],
}
