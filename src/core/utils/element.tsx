import React from 'react'
import { Propsx } from './type'

export type EventHandle = (
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
) => void

export const Anchor = ({
  props,
  style
}: Propsx<{ href; name; over?: EventHandle; out?: EventHandle }, { a }>) => {
  const { href, name, over, out } = props
  const { a } = style
  return (
    <a href={href} style={a} onMouseOver={over} onMouseOut={out}>
      {name}
    </a>
  )
}
