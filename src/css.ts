import { CSSProperties } from 'react'
export const data = require('../src/data/data.json')

const tabsLength = Object.keys(data).length - 1

export const globalcss: Record<
  'img' | 'p' | 'a' | 'div' | 'button' | 'body' | 'bottom',
  CSSProperties
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
    fontSize: '200%',
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
    fontSize: '200%'
  },
  bottom: {
    color: '#2a334d',
    fontSize: '200%'
  }
}

export const tabscss: Record<
  'active' | 'unactive',
  Record<'button' | 'bottom', CSSProperties>
> = {
  active: {
    button: {
      ...globalcss.button,
      color: '#6272a4',
      backgroundColor: '#282a36',
      boxShadow: '#000000 -5px 5px 10px'
    },
    bottom: globalcss.bottom
  },
  unactive: {
    button: {
      ...globalcss.button,
      color: '#2a334d',
      backgroundColor: '#191a21',
      boxShadow: ''
    },
    bottom: globalcss.bottom
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
    margin: '30px auto',
    lineHeight: '130%'
  },
  a: globalcss.a
}
