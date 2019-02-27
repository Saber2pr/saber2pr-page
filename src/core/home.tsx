import React, { Props } from 'react'
import { Link } from './utils/link'
import { IState } from '../interface'
import { Style } from './utils/type'

export interface Home extends Props<any> {
  style: Style<'img' | 'a' | 'p'>
  state: IState['home']
}

export const Home = ({ state, style }: Home) => {
  const { title, logo, author, readME, websites } = state
  
  return (
    <>
      <h1 style={style.p}>{title}</h1>
      <img src={logo} alt={title} style={style.img} />
      <p style={style.p}>{author}</p>
      <p style={style.p}>{readME}</p>
      <Link props={websites} style={style} />
    </>
  )
}
