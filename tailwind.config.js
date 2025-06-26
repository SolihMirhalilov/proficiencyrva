module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        imbue: ['"Imbue"', 'serif'],
      },
      colors:{
        mycolor1:'#AAEEFF',
        mycolor2:'00CCFF',
      },
      boxShadow: {
        'custom-blue': '0 4px 6px -1px rgba(0, 0, 255, 0.5)',
      }
    },
  },
  plugins: [],
}
