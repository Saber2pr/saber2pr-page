import React, { Props } from 'react'
import { Style } from './type'

export interface Columns extends Props<any> {
  props: {
    size?: number
  }
  style: Style<'div'>
}

export const Columns = ({ props, children, style }: Columns) => {
  const size = props.size || 2
  const { div } = style
  return (
    <div
      style={{
        ...div,
        display: 'grid',
        gridTemplateColumns: ` ${100 / size}% `.repeat(size)
      }}
    >
      {children}
    </div>
  )
}
