import React, { useState, Props } from 'react'
import { Fold } from './utils/fold'
import { Application } from '../type'
import { TabV, Tab } from './utils/tab'
import { tabVcss } from '../css/css'
import { find, Search } from './utils/search'
import { Anchor } from './utils/anchor'
import { Button } from './utils/button'
import { Style } from './utils/type'

export interface Blog extends Props<any> {
  props: Application['blog']
  style: Style<'div' | 'hr' | 'button' | 'a' | 'p' | 'input'>
}

const Content = ({ props, style }: Blog) => {
  const { hr, div, button, p } = style
  const [state, setState] = useState<'enter' | 'out'>('out')
  const [cur, setCur] = useState(0)
  const fold = (
    <Fold
      props={props}
      maxSize={6}
      render={({ name }, index) => (
        <div style={div}>
          <Anchor
            name={name}
            href={'#'}
            style={style}
            onClick={() => {
              setState('enter')
              setCur(index)
            }}
          />
          <hr style={hr} />
        </div>
      )}
      style={{ button }}
    />
  )
  const content = (
    <div>
      <p style={p}>{props[cur].content}</p>
      <Button
        name={'back'}
        onClick={() => {
          setState('out')
          setCur(0)
        }}
        style={button}
      />
    </div>
  )
  if (state === 'out') {
    return fold
  } else if (state === 'enter') {
    return content
  }
}

const Tabs = ({ props, style }: Blog) =>
  Array.from(new Set(props.map(v => v.type))).map(t => (
    <Tab name={t}>
      <Content props={find(props, v => v.type === t)} style={style} />
    </Tab>
  ))

export const Blog = ({ props, style }: Blog) => {
  const { div } = style
  const [searched, setSearched] = useState(props)
  return (
    <>
      <div style={div}>
        <Search props={props} onChange={v => setSearched(v)} style={style} />
        <TabV
          col={'25% 75%'}
          active={tabVcss.active}
          unactive={tabVcss.unactive}
        >
          {Tabs({ props: searched, style })}
        </TabV>
      </div>
    </>
  )
}
