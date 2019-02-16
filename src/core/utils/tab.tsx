import React, { Props, useState, CSSProperties } from 'react'

export interface TabProps extends Props<any> {
  name: string
}

export const Tab = (props: TabProps) => <div {...props}>{props.children}</div>

export interface Tabs extends Props<any> {
  style: Record<'button', CSSProperties>
}

export function Tabs<T>({ children, style }: Tabs) {
  const [cur, update] = useState(0)
  const { button } = style
  return (
    <>
      {React.Children.map(children, (node, index) => (
        <button
          style={{ ...button, color: index === cur ? 'red' : 'blue' }}
          key={index}
          onClick={() => update(index)}
        >
          {(node['props'] as TabProps)['name']}
        </button>
      )).concat(children[cur] || children)}
    </>
  )
}
