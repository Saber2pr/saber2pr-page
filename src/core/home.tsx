import React from 'react'
import { Link } from './utils/link'
import { Application } from '../Application'
import { Propsx } from './utils/type'

export const Home = ({
  props,
  style
}: Propsx<Application['home'], 'img' | 'a' | 'p'>) => {
  const { title, logo, author, readME, websites } = props
  const { p, img, a } = style
  return (
    <>
      <p style={p}>{title}</p>
      <img src={logo} alt="saber2pr" style={img} />
      <p style={p}>{author}</p>
      <p style={p}>{readME}</p>
      <Link props={websites} style={{ a }} />
    </>
  )
}
