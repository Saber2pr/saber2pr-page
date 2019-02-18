import React from 'react'
import { Application } from '../../Application'
import { Propsx } from './type'
import { Anchor } from './anchor'
import { Columns } from './column'

export type Link = Propsx<Application['home']['websites'], 'a'>

export const Link = ({ props, style }: Link) => {
  return (
    <>
      {props.map(({ name, href }, index) => (
        <div key={index}>
          <Anchor props={{ name, href }} style={style} key={index} />
        </div>
      ))}
    </>
  )
}

export type LinkImg = Propsx<Application['project'], 'a' | 'img' | 'p' | 'div'>

export const LinkImg = ({ props, style }: LinkImg) => {
  const { a, img, p, div } = style
  return (
    <>
      {props.map(({ name, href, src, infor }, index) => (
        <Columns props={{ size: 3 }} style={{ div }}>
          <div>
            <Anchor props={{ name, href }} style={{ a }} key={index} />
          </div>
          <div>
            <img src={src} alt={name} style={img} key={index} />
          </div>
          <div>
            <p style={p}>{infor}</p>
          </div>
        </Columns>
      ))}
    </>
  )
}
