module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm: '375px', 
      md: '768px',
      lg: '1440px'
    },
    extend: {
      colors:{
        eucaplyptus: '#44FFA1',
        darkpurple: '#24053E',
        davysgrey: '#584D62',
        ghostwhite: '#FCF8FF'
      },
      fontFamily:{
        sans: ['Manrope', 'sans'],
        heading: [ 'Fraunces', 'sans-serif' ]
      }
    },
  },
  plugins: [],
}
