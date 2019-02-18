import React, { Props, useState, CSSProperties } from 'react'
import { style } from './style'

export interface TabProps extends Props<any> {
  name: string
}

export const Tab = (props: TabProps) => <div {...props}>{props.children}</div>

export interface Tabs extends Props<any> {
  unactive?: Record<'button' | 'bottom', CSSProperties>
  active?: Record<'button' | 'bottom', CSSProperties>
  bottom?: string
}

const over = (active: CSSProperties) => (
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>
) =>
  style(event.target)({
    color: active.color,
    boxShadow: active.boxShadow
  })

const out = (
  isactive: boolean,
  active: CSSProperties,
  unactive: CSSProperties
) => (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
  style(event.target)({
    color: isactive ? active.color : unactive.color,
    boxShadow: isactive ? active.boxShadow : unactive.boxShadow
  })

export function Tabs<T>({ children, active, unactive, bottom }: Tabs) {
  const [cur, update] = useState(0)
  return (
    <>
      {React.Children.map(children, (node, index) => (
        <button
          style={index === cur ? active.button : unactive.button}
          key={index}
          onClick={() => update(index)}
          onMouseOver={over(active.button)}
          onMouseOut={out(index === cur, active.button, unactive.button)}
        >
          {(node['props'] as TabProps)['name']}
        </button>
      ))
        .concat(children[cur] || children)
        .concat(<hr style={{ color: '#944a73c0' }} />)
        .concat(<div style={active.bottom}>{bottom}</div>)}
    </>
  )
}
