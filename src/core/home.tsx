import React from 'react'
import { Link } from './utils/link'
import { Application } from '../Application'
import { Propsx } from './utils/type'

type Home = Propsx<Application['home'], 'img' | 'a' | 'p'>

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
