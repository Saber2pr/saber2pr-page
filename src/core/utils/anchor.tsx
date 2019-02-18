import React from 'react'
import { Propsx } from './type'
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

export const Anchor = ({ props, style }: Propsx<{ href; name }, 'a'>) => {
  const { href, name } = props
  const { a } = style
  return (
    <a href={href} style={a} onMouseOver={over} onMouseOut={out}>
      {name}
    </a>
  )
}
