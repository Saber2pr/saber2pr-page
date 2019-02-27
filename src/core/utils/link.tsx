import React, { Props } from 'react'
import { Anchor } from './anchor'
import { Columns } from './column'
import { IState } from '../../interface'
import { Fold } from './fold'
import { Style } from './type'

export interface Link extends Props<any> {
  props: IState['home']['websites']
  style: Style<'a'>
}

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
  props: IState['project']
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
