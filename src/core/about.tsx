import React from 'react'
import { Application } from '../Application'
import { Link } from './utils/link'
import { Propsx } from './utils/type'

export const About = ({
  props,
  style
}: Propsx<Application['about'], 'a' | 'p'>) => {
  const { content, title, links } = props
  const { a, p } = style
  return (
    <>
      <h1 style={p}>{title}</h1>
      <p style={p}>{content}</p>
      <Link props={links} style={{ a }} />
    </>
  )
}
