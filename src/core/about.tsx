import React, { Props } from 'react'
import { IState } from '../store/IState'
import { Link } from './utils/link'
import { Style } from './utils/type'

export interface About extends Props<any> {
  style: Style<'a' | 'p'>
  state: IState['about']
}

export const About = ({ state, style }: About) => {
  const { title, content, more, contact, links } = state
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
