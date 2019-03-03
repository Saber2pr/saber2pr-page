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
  onClick?: (index: number) => void
}

export function Tabs<T>({
  children,
  active,
  unactive,
  bottom,
  current,
  onClick
}: Tabs) {
  const [cur, update] = useState(current || 0)
  return (
    <>
      {React.Children.map(children, (node, index) => (
        <Button
          style={index === cur ? active.button : unactive.button}
          key="jssk8glndd94bj470pn"
          onClick={() => {
            !!onClick ? onClick(index) : null
            update(index)
          }}
          activeStyle={active.button}
          unactiveStyle={unactive.button}
          name={(node['props'] as TabProps)['name']}
          isactive={index === cur}
        />
      ))
        .concat(children[cur] || children)
        .concat(<hr style={active.hr} key="jssk91tow4yu2vi8oor" />)
        .concat(
          <div style={active.bottom} key="jssk97jyinb1jtq2mu">
            {bottom}
          </div>
        )}
    </>
  )
}

export interface TabV extends Props<any> {
  unactive: Style<'button'>
  active: Style<'button'>
  bottom?: string
  col: string
  current?: number
  onClick?: (index: number) => void
}

export const TabV = ({
  children,
  active,
  unactive,
  col,
  current,
  onClick
}: TabV) => {
  const array = React.Children.toArray(children)
  current = current < array.length ? current : array.length - 1
  const tabs = array.map((node, index) => (
    <div key="jssk9kdv3ikyxb755fw">
      <Button
        style={index === current ? active.button : unactive.button}
        onClick={() => {
          !!onClick ? onClick(index) : null
        }}
        name={(node['props'] as TabProps)['name']}
        activeStyle={active.button}
        unactiveStyle={unactive.button}
        isactive={index === current}
      />
    </div>
  ))
  const content = children[current] || children
  return (
    <Columns props={{ size: 2, col }}>
      <div>{tabs}</div>
      <div>{content}</div>
    </Columns>
  )
}
