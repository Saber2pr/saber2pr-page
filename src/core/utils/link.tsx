import React, { Props } from 'react'
import { Propsx, Style } from './type'
import { Anchor } from './anchor'
import { Columns } from './column'
import { Application } from '../../type'
import { Fold } from './fold'

export type Link = Propsx<Application['home']['websites'], 'a'>

export const Link = ({ props, style }: Link) => (
  <>
    {props.map(({ name, href }, index) => (
      <div key={index}>
        <Anchor name={name} href={href} style={style} key={index} />
      </div>
    ))}
  </>
)

export interface LinkImg extends Props<any> {
  props: Application['project']
  style: Style<'a' | 'img' | 'p' | 'div' | 'button'>
}

export const LinkImg = ({ props, style }: LinkImg) => {
  const { img, p } = style
  return (
    <>
      <Fold
        props={props}
        style={style}
        render={({ name, href, src, infor }, index) => (
          <Columns props={{ size: 3 }} style={style}>
            <div>
              <Anchor name={name} href={href} style={style} key={index} />
            </div>
            <div>
              <img src={src} alt={name} style={img} key={index} />
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
