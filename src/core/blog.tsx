import React, { useState } from 'react'
import { Fold } from './utils/fold'
import { Propsx } from './utils/type'
import { Application } from '../type'
import { TabV, Tab } from './utils/tab'
import { tabVcss } from '../css/css'
import { find, Search } from './utils/search'

const Content = ({
  props,
  style
}: Propsx<Application['blog'], 'div' | 'hr' | 'button'>) => {
  const { hr, div, button } = style
  return (
    <Fold
      props={props}
      maxSize={6}
      render={({ name, content, type }) => (
        <div style={div}>
          <div>{name}</div>
          <hr style={hr} />
        </div>
      )}
      style={{ button }}
    />
  )
}

const Tabs = ({
  props,
  style
}: Propsx<Application['blog'], 'div' | 'hr' | 'button'>) =>
  Array.from(new Set(props.map(v => v.type))).map(t => (
    <Tab name={t}>
      <Content props={find(props, v => v.type === t)} style={style} />
    </Tab>
  ))

export const Blog = ({
  props,
  style
}: Propsx<Application['blog'], 'div' | 'hr' | 'button' | 'input'>) => {
  const { div } = style
  const [searched, setSearched] = useState(props)
  return (
    <>
      <div style={div}>
        <Search props={props} onChange={v => setSearched(v)} style={style} />
        <TabV
          col={'20% 80%'}
          active={tabVcss.active}
          unactive={tabVcss.unactive}
        >
          {Tabs({ props: searched, style })}
        </TabV>
      </div>
    </>
  )
}
