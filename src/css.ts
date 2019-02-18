import { CSSProperties } from 'react'
export const data = require('../src/data/data.json')

export const globalcss: Record<
  'img' | 'p' | 'a' | 'div' | 'button',
  CSSProperties
> = {
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
    fontSize: '200%',
    width: '90px',
    lineHeight: '50px',
    borderRadius: '100%',
    color: '#6272a4',
    textDecoration: 'none'
  },
  button: {
    width: `${100 / Object.keys(data).length}%`,
    border: '1px solid #000000',
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px',
    padding: '6px 10px',
    cursor: 'pointer',
    outline: 'none',
    fontSize: '200%'
  }
}

export const tabscss: Record<
  'active' | 'unactive',
  Record<'button', CSSProperties>
> = {
  active: {
    button: {
      ...globalcss.button,
      color: '#6272a4',
      backgroundColor: '#282a36',
      boxShadow: '#000000 -5px 5px 10px'
    }
  },
  unactive: {
    button: {
      ...globalcss.button,
      color: '#2a334d',
      backgroundColor: '#191a21',
      boxShadow: ''
    }
  }
}

export const projectcss: Record<'img' | 'a', CSSProperties> = {
  img: {
    width: '40%',
    overflow: 'hidden'
  },
  a: globalcss.a
}

export const aboutcss: Record<'p' | 'a', CSSProperties> = {
  p: {
    ...globalcss.p,
    width: '70%',
    margin: '30px auto'
  },
  a: globalcss.a
}
