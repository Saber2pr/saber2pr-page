import React from 'react'
import { Application } from '../Application'
import { Link } from './utils/link'
import { Propsx } from './utils/type'

export const About = ({
  props,
  style
}: Propsx<Application['about'], 'a' | 'p'>) => {
  const { content, title, contact, links } = props
  const { a, p } = style
  return (
    <>
      <h1 style={p}>{title}</h1>
      <p style={p}>{content}</p>
      <h1 style={p}>{contact}</h1>
      <Link props={links} style={{ a }} />
    </>
  )
}
