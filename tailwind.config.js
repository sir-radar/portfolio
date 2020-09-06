module.exports = {
  purge: ['./public/**/*.html', './src/**/*.vue'],
  theme: {
    extend: {
      colors: {
        'app-black': '#2c2d30',
      },
      spacing: {
        '7': '0.375rem',
        '15': '15px',
        '33': '33px',
        '70': '70px',
        '278': '278px',
      },
      height: {
        '11': '11.25rem',
        '50': '50px',
      },
      width: {
        '11': '11.25rem',
        '50': '50px',
      },
    },
    inset: {
      '50': '50px',
      '30': '30px',
      '20': '20px',
      '16': '1rem',
    },
    boxShadow: {
      app: '3px 3px 3px #202125, -3px -3px 3px #353535',
      'app-inner': 'inset 3px 3px 3px #202125, inset -3px -3px 3px #353535',
      'app-sm': '2px 2px 2px #202125, -2px -2px 2px #353535',
      'app-sm-inner': 'inset 2px 2px 2px #202125, inset -2px -2px 2px #353535',
      'app-xsm-inner':
        'inset 1.5px 1.5px 1.5px #202125, inset -1.5px -1.5px 1.5px #353535',
    },
    borderRadius: {
      '1': '1rem',
      '2': '2rem',
      '4': '4rem',
      '50': '50%',
    },
    textColor: {
      white: '#ffffff',
      muted: '#9da1a5',
      icon: '#558D6A',
    },
  },
  variants: {},
  plugins: [],
};
