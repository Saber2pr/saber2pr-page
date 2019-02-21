import React, { useState, Props } from 'react'
import { Application } from '../type'
import { TabV, Tab } from './utils/tab'
import { tabVcss } from '../css/css'
import { find, Search } from './utils/search'
import { Button } from './utils/button'
import { Style } from './utils/type'
import { Columns } from './utils/column'
import { Content } from './components/blog_content'

export interface Blog extends Props<any> {
  props: Application['blog']
  style: Style<'div' | 'hr' | 'button' | 'a' | 'p' | 'input'>
}

function useData(props: Blog['props']) {
  const [data, setData] = useState(props)
  const del = (index: number) => {
    data.splice(index, 1)
    setData(data)
  }
  const edit = (content: string, index) => {
    data[index].content = content
    setData(data)
  }
  return { data, edit, del }
}

const Tabs = ({ props, style }: Blog) =>
  Array.from(new Set(props.map(v => v.type))).map(t => (
    <Tab name={t}>
      <Content props={find(props, v => v.type === t)} style={style} />
    </Tab>
  ))

export const Blog = ({ props, style }: Blog) => {
  const { div } = style
  const [data, setData] = useState(props)
  return (
    <>
      <div style={div}>
        <Columns props={{ size: 2, col: '25% 75%' }}>
          <div>
            <Button name={'写新日志'} style={style.button} />
          </div>
          <div>
            <Search props={props} onChange={v => setData(v)} style={style} />
          </div>
        </Columns>
        <TabV
          col={'25% 75%'}
          active={tabVcss.active}
          unactive={tabVcss.unactive}
        >
          {Tabs({ props: data, style })}
        </TabV>
      </div>
    </>
  )
}
