module.exports = {
  purge: ['./public/**/*.html', './src/**/*.vue'],
  theme: {
    extend: {
      colors: {
        'app-black': '#2c2d30',
        'app-light': '#f3f5f8',
        'line-color': 'rgba(255,255,255,.07)',
        'line-color-light': '#dee2e6',
      },
      spacing: {
        '7': '0.375rem',
        '15': '15px',
        '33': '33px',
        '70': '70px',
        '21': '5.6rem',
        '278': '278px',
      },
      height: {
        '7': '0.375rem',
        '11': '11.25rem',
        '50': '50px',
        '53': '3.3rem',
        '188': '11.78rem',
        '388': '388.3px',
      },
      width: {
        '11': '11.25rem',
        '50': '50px',
        '53': '3.3rem',
        '60': '3.75rem',
      },
      fontSize: {
        title: '2.5rem',
        submit: '.9375rem'
      },
    },
    inset: {
      '0': '0',
      n15: '-0.9375rem',
      '15': '0.9375rem',
      '50': '50px',
      '30': '30px',
      '20': '20px',
      '16': '1rem',
    },
    boxShadow: {
      app: '3px 3px 3px #202125, -3px -3px 3px #353535',
      'app-light': '3px 3px 3px #cdcdcd, -3px -3px 3px #fafafa',
      'app-inner': 'inset 3px 3px 3px #202125, inset -3px -3px 3px #353535',
      'app-light-inner': 'inset 3px 3px 3px #cdcdcd, -3px -3px 3px #fafafa',
      'app-sm': '2px 2px 2px #202125, -2px -2px 2px #353535',
      'app-light-sm': '2px 2px 2px #cdcdcd, -2px -2px 2px #fafafa',
      'app-sm-inner': 'inset 2px 2px 2px #202125, inset -2px -2px 2px #353535',
      'app-light-sm-inner': 'inset 2px 2px 2px #cdcdcd, inset -2px -2px 2px #fafafa',
      'app-xsm-inner':
        'inset 1.5px 1.5px 1.5px #202125, inset -1.5px -1.5px 1.5px #353535',
      'app-light-xsm-inner':
        'inset 1.5px 1.5px 1.5px #cdcdcd, inset -1.5px -1.5px 1.5px #fafafa',
    },
    borderRadius: {
      '1': '1rem',
      '2': '2rem',
      '3': '3rem',
      '4': '4rem',
      '50': '50%',
    },
    textColor: {
      white: '#ffffff',
      dark: '#212529',
      muted: '#9da1a5',
      icon: '#558D6A',
    },
  },
  variants: {},
  plugins: [],
};
