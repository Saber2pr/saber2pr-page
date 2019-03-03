import React, { CSSProperties, Props } from 'react'
import { style } from './style'

const active: CSSProperties = { color: '#6272a4' }

const unactive: CSSProperties = { color: '#2a334d' }

const over = (activeStyle: CSSProperties = active) => (
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => style(event.target)(activeStyle)

const out = (
  activeStyle: CSSProperties = active,
  unactiveStyle: CSSProperties = unactive
) => (isactive?: boolean) => (
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => style(event.target)(isactive ? activeStyle : unactiveStyle)

export interface Button extends Props<any> {
  style?: CSSProperties
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  name: string
  isactive?: boolean
  activeStyle?: CSSProperties
  unactiveStyle?: CSSProperties
}

export const Button = ({
  style,
  onClick,
  name,
  isactive,
  activeStyle,
  unactiveStyle
}: Button) => (
  <button
    style={style}
    onClick={onClick}
    onMouseOver={over(activeStyle)}
    onMouseOut={out(activeStyle, unactiveStyle)(isactive)}
  >
    {name}
  </button>
)
