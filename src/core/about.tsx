import React, { Props } from 'react'
import { Link } from './utils/link'
import { Application } from '../type'
import { Style } from './utils/type'

export interface About extends Props<any> {
  props: Application['about']
  style: Style<'a' | 'p'>
}

export const About = ({ props, style }: About) => {
  const { title, content, more, contact, links } = props
  const { p } = style
  return (
    <>
      <h1 style={p}>{title}</h1>
      <p style={p}>{content}</p>
      <p style={p}>{more}</p>
      <h1 style={p}>{contact}</h1>
      <Link props={links} style={style} />
    </>
  )
}
