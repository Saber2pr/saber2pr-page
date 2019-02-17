import React from 'react'
import { Application } from '../../Application'
import { Propsx } from './type'
import { style } from './style'
import { Anchor } from './element'

export const over = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>
  style(event.target)({
    boxShadow: 'darkgrey 5px 5px 30px 5px'
  })

export const out = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>
  style(event.target)({
    boxShadow: ''
  })

export type Link = Propsx<Application['home']['websites'], 'a'>

export const Link = ({ props, style }: Link) => {
  return (
    <>
      {props.map(({ name, href }) => (
        <div>
          <Anchor props={{ name, href, out, over }} style={style} />
        </div>
      ))}
    </>
  )
}

export type LinkImg = Propsx<Application['project'], 'a' | 'img'>

export const LinkImg = ({ props, style }: LinkImg) => {
  const { a, img } = style
  return (
    <>
      {props.map(({ name, href, src }) => (
        <>
          <div>
            <Anchor props={{ name, href, out, over }} style={{ a }} />
          </div>
          <div>
            <img src={src} alt={name} style={img} />
          </div>
        </>
      ))}
    </>
  )
}
