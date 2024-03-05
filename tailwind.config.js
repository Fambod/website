/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens: {
      'xxs': '320px',
      // => @media (min-width: 320px) { ... }

      'xs': '390px',
      // => @media (min-width: 390px) { ... }

      'sm': '576px',
      // => @media (min-width: 575px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '992px',
      // => @media (min-width: 992px) { ... } 

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1366px',
      // => @media (min-width: 1440px) { ... }

      '3xl': '1600px',
      // => @media (min-width: 1600px) { ... }
      '4xl': '1883px',
      // => @media (min-width: 1920px) { ... }
    },
    extend: {
      colors: {
        'bodybg' : '#57B48D',
        'fambad': '#FFCD29',
        'whitee': '#FFF',
        'adam' : '#FFEBA8',
        'night' :  '#353849',
        'cardbg' : '#FFFFFF',
        'ligthcream' : "#F4F4F4",
        'ligthgray' : "#ECFFF5",
      },
      backgroundImage: {
        'hero-pattern': " linear-gradient(302deg, #6DD89D -7.5%, #57B48D 69.33%)",
      },
      boxShadow: {
        '2xl': "12px 20px 25px 0px rgba(0, 0, 0, 0.13)",
      },
      fontFamily: {
        Urbanist : ["Urbanist"],
        Archivo : ["Archivo"],
        DmSans : ["DM Sans"],
        Poppins : ["Poppins"]
      },
    },
  },
  plugins: [],
}