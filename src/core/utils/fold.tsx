import React, { Props, useState, CSSProperties } from 'react'
import { Style } from './type'
import { style } from './style'

export interface Fold<T> extends Props<any> {
  props: T[]
  maxSize?: number
  style: Style<'button'>
  render: (value: T, index: number) => JSX.Element
}

const over = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
  style(event.target)({
    color: '#6272a4'
  })

const out = (button: CSSProperties) => (
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => style(event.target)(button)

export function Fold<T>({ props, maxSize, style, render }: Fold<T>) {
  const { button } = style
  const [maxsize, setMaxSize] = useState(maxSize || 3)
  const viewprops = props.slice(0, maxsize)
  return (
    <>
      {viewprops
        .map((value, index) => render(value, index))
        .concat(
          <button
            style={button}
            onClick={() => setMaxSize(maxsize * 2)}
            onMouseOver={over}
            onMouseOut={out(button)}
          >
            {maxsize < props.length ? '更多' : '到底了'}
          </button>
        )}
    </>
  )
}
