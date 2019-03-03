import React, { Props } from 'react'
import { Style } from './type'

export interface Columns extends Props<any> {
  props: {
    size?: number
    col?: string
  }
  style?: Style<'div'>
}

export const colsplit = (size: number) => ` ${100 / size}% `.repeat(size)

export const Columns = ({ props, children, style = { div: {} } }: Columns) => {
  const size = props.size || 1
  const { div } = style
  return (
    <div
      style={{
        ...div,
        display: 'grid',
        gridTemplateColumns: props.col || colsplit(size)
      }}
    >
      {children}
    </div>
  )
}
