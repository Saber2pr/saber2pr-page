import React, { Props, useState, CSSProperties } from 'react'
import { style } from './style'

export interface TabProps extends Props<any> {
  name: string
}

export const Tab = (props: TabProps) => <div {...props}>{props.children}</div>

export interface Tabs extends Props<any> {
  unactive?: Record<'button', CSSProperties>
  active?: Record<'button', CSSProperties>
}

const over = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
  style(event.target)({
    color: '#3c435e',
    boxShadow: '#000000 -5px 5px 10px'
  })

const out = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
  style(event.target)({
    boxShadow: ''
  })

export function Tabs<T>({ children, active, unactive }: Tabs) {
  const [cur, update] = useState(0)
  return (
    <>
      {React.Children.map(children, (node, index) => (
        <button
          style={index === cur ? active.button : unactive.button}
          key={index}
          onClick={() => update(index)}
          onMouseOver={over}
          onMouseOut={out}
        >
          {(node['props'] as TabProps)['name']}
        </button>
      )).concat(children[cur] || children)}
    </>
  )
}
