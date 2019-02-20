import React, { Props } from 'react'
import { Style } from './type'
import { style } from './style'

export type EventHandle = (
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
) => void

const over = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>
  style(event.target)({
    boxShadow: 'darkgrey 5px 5px 30px 5px'
  })

const out = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>
  style(event.target)({
    boxShadow: ''
  })

interface Anchor extends Props<any> {
  href: string
  name: string
  style: Style<'a'>
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
}

export const Anchor = ({ name, href, style, onClick }: Anchor) => {
  const { a } = style
  return (
    <a
      href={href}
      style={a}
      onMouseOver={over}
      onMouseOut={out}
      onClick={onClick}
    >
      {name}
    </a>
  )
}
