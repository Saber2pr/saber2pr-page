import React, { Props, useState } from 'react'
import { Style } from './type'
import { Columns } from './column'
import { Button } from './button'

export interface TabProps extends Props<any> {
  name: string
}

export const Tab = (props: TabProps) => <div {...props}>{props.children}</div>

export interface Tabs extends Props<any> {
  unactive: Style<'button' | 'bottom' | 'hr'>
  active: Style<'button' | 'bottom' | 'hr'>
  bottom?: string
  current?: number
}

export function Tabs<T>({ children, active, unactive, bottom, current }: Tabs) {
  const [cur, update] = useState(current || 0)
  return (
    <>
      {React.Children.map(children, (node, index) => (
        <Button
          style={index === cur ? active.button : unactive.button}
          key={index}
          onClick={() => update(index)}
          activeStyle={active.button}
          unactiveStyle={unactive.button}
          name={(node['props'] as TabProps)['name']}
          isactive={index === cur}
        />
      ))
        .concat(children[cur] || children)
        .concat(<hr style={active.hr} />)
        .concat(<div style={active.bottom}>{bottom}</div>)}
    </>
  )
}

export interface TabV extends Props<any> {
  unactive: Style<'button'>
  active: Style<'button'>
  bottom?: string
  col: string
}

export const TabV = ({ children, active, unactive, col }: TabV) => {
  const [cur, update] = useState(0)
  const tabs = React.Children.map(children, (node, index) => (
    <div>
      <Button
        style={index === cur ? active.button : unactive.button}
        key={index}
        onClick={() => update(index)}
        name={(node['props'] as TabProps)['name']}
        activeStyle={active.button}
        unactiveStyle={unactive.button}
        isactive={index === cur}
      />
    </div>
  ))
  const content = children[cur] || children
  return (
    <Columns props={{ size: 2, col }}>
      <div>{tabs}</div>
      <div>{content}</div>
    </Columns>
  )
}
