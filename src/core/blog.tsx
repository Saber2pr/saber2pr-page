import React, { useState } from 'react'
import { Fold } from './utils/fold'
import { Propsx } from './utils/type'
import { Application } from '../type'
import { TabV, Tab } from './utils/tab'
import { tabVcss } from '../css/css'
import { find, Search } from './utils/search'
import { Anchor } from './utils/anchor'
import { Button } from './utils/button'

const Content = ({
  props,
  style
}: Propsx<Application['blog'], 'div' | 'hr' | 'button' | 'a'>) => {
  const { hr, div, button } = style
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
  if (state === 'out') {
    return fold
  } else if (state === 'enter') {
    return (
      <div>
        <p>{props[cur].content}</p>
        <Button name={'back'} onClick={() => setState('out')} style={button} />
      </div>
    )
  }
}

const Tabs = ({
  props,
  style
}: Propsx<Application['blog'], 'div' | 'hr' | 'button' | 'a'>) =>
  Array.from(new Set(props.map(v => v.type))).map(t => (
    <Tab name={t}>
      <Content props={find(props, v => v.type === t)} style={style} />
    </Tab>
  ))

export const Blog = ({
  props,
  style
}: Propsx<Application['blog'], 'div' | 'hr' | 'button' | 'input' | 'a'>) => {
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
