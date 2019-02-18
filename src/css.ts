import { Style } from './core/utils/type'
export const data = require('../src/data/data.json')

const tabsLength = Object.keys(data).length - 1

export const globalcss: Style<
  'img' | 'p' | 'a' | 'div' | 'button' | 'body' | 'bottom' | 'hr'
> = {
  body: {
    backgroundColor: '#191a21'
  },
  div: {
    boxShadow: '#000000 0px 5px 10px',
    backgroundColor: '#282a36',
    border: '1px solid #191a21',
    textAlign: 'center'
  },
  img: {
    width: '100px',
    borderRadius: '50%',
    overflow: 'hidden'
  },
  p: {
    marginTop: '30px',
    marginBottom: '30px',
    fontSize: '150%',
    color: '#f8ebc3'
  },
  a: {
    fontSize: '150%',
    width: '90px',
    lineHeight: '50px',
    borderRadius: '100%',
    color: '#6272a4',
    textDecoration: 'none'
  },
  button: {
    width: `${100 / tabsLength}%`,
    border: '1px solid #000000',
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px',
    padding: '6px 10px',
    cursor: 'pointer',
    outline: 'none',
    fontSize: '150%'
  },
  bottom: {
    color: '#2a334d',
    fontSize: '100%',
    marginBottom: '10px'
  },
  hr: {
    color: '#944a73c0'
  }
}

export const tabscss: Record<
  'active' | 'unactive',
  Style<'button' | 'bottom' | 'hr'>
> = {
  active: {
    button: {
      ...globalcss.button,
      color: '#6272a4',
      backgroundColor: '#282a36',
      boxShadow: '#000000 -5px 5px 10px'
    },
    bottom: globalcss.bottom,
    hr: globalcss.hr
  },
  unactive: {
    button: {
      ...globalcss.button,
      color: '#2a334d',
      backgroundColor: '#191a21',
      boxShadow: ''
    },
    bottom: globalcss.bottom,
    hr: globalcss.hr
  }
}

export const projectcss: Style<'img' | 'a' | 'p' | 'div' | 'input'> = {
  div: {
    marginTop: '50px',
    marginBottom: '50px'
  },
  img: {
    width: '40%'
  },
  a: {
    ...globalcss.a,
    fontSize: '100%'
  },
  p: {
    ...globalcss.p,
    fontSize: '100%',
    width: '70%',
    margin: '30px auto',
    lineHeight: '150%'
  },
  input: {
    marginTop: '50px'
  }
}

export const aboutcss: Style<'p' | 'a'> = {
  p: {
    ...globalcss.p,
    width: '80%',
    margin: '30px auto',
    lineHeight: '160%',
    fontSize: '100%'
  },
  a: globalcss.a
}
