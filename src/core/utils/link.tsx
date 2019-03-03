import React, { Props } from 'react'
import { Anchor } from './anchor'
import { Columns } from './column'
import { Fold } from './fold'
import { Style } from './type'

export interface Link extends Props<any> {
  props: {
    name: string
    href: string
  }[]
  style: Style<'a'>
}

export const Link = ({ props, style }: Link) => (
  <>
    {props.map(({ name, href }, index) => (
      <div key={`jssjzmjf5ls40k4z34c${index}`}>
        <Anchor name={name} href={href} style={style.a} />
      </div>
    ))}
  </>
)

export interface LinkImg extends Props<any> {
  props: {
    name: string
    href: string
    src: string
    infor: string
  }[]
  style: Style<'a' | 'img' | 'p' | 'div' | 'button'>
}

export const LinkImg = ({ props, style }: LinkImg) => {
  const { img, p, a } = style
  return (
    <>
      <Fold
        props={props}
        style={style}
        render={({ name, href, src, infor }, index) => (
          <Columns
            props={{ size: 3 }}
            style={style}
            key={`jssk1tfl7c1esj7id3e${index}`}
          >
            <div>
              <Anchor name={name} href={href} style={a} />
            </div>
            <div>
              <img src={src} alt={name} style={img} />
            </div>
            <div>
              <p style={p}>{infor}</p>
            </div>
          </Columns>
        )}
      />
    </>
  )
}
