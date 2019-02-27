import React, { Props } from 'react'
import { IState } from '../store/IState'
import { Link } from './utils/link'
import { Style } from './utils/type'

export interface Home extends Props<any> {
  style: Style<'img' | 'a' | 'p'>
  state: IState['home']
}

export const Home = ({ state, style }: Home) => {
  const { title, logo, author, readME, websites } = state
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
