import React, { Props } from 'react'
import { Link } from './utils/link'
import { Data } from '../type'
import { Style } from './utils/type'

export interface Home extends Props<any> {
  props: Data['home']
  style: Style<'img' | 'a' | 'p'>
}

export const Home = ({ props, style }: Home) => {
  const { title, logo, author, readME, websites } = props
  const { p, img } = style
  return (
    <>
      <h1 style={p}>{title}</h1>
      <img src={logo} alt={title} style={img} />
      <p style={p}>{author}</p>
      <p style={p}>{readME}</p>
      <Link props={websites} style={style} />
    </>
  )
}
