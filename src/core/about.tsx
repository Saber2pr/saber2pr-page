import React from 'react'
import { Application } from '../Application'
import { Link } from './utils/link'
import { Propsx } from './utils/type'

type About = Propsx<Application['about'], 'a' | 'p'>

export const About = ({ props, style }: About) => {
  const { title, content, more, contact, links } = props
  const { a, p } = style
  return (
    <>
      <h1 style={p}>{title}</h1>
      <p style={p}>{content}</p>
      <p style={p}>{more}</p>
      <h1 style={p}>{contact}</h1>
      <Link props={links} style={{ a }} />
    </>
  )
}
