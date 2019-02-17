import React from 'react'
import { Application } from '../../Application'
import { Propsx } from './type'
import { style } from './style'
import { Anchor } from './element'

const over = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>
  style(event.target)({
    boxShadow: 'darkgrey 5px 5px 30px 5px'
  })

const out = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>
  style(event.target)({
    boxShadow: ''
  })

export type Link = Propsx<Application['home']['websites'], 'a'>

export const Link = ({ props, style }: Link) => {
  return (
    <>
      {props.map(({ name, href }, index) => (
        <div key={index}>
          <Anchor props={{ name, href, out, over }} style={style} key={index} />
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
      {props.map(({ name, href, src }, index) => (
        <>
          <div key={index}>
            <Anchor
              props={{ name, href, out, over }}
              style={{ a }}
              key={index}
            />
          </div>
          <div key={index}>
            <img src={src} alt={name} style={img} key={index} />
          </div>
        </>
      ))}
    </>
  )
}
