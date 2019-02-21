import React, { Props, useState } from 'react'
import { Application } from '../type'
import { TabV, Tab } from './utils/tab'
import { tabVcss } from '../css/css'
import { find, Search } from './utils/search'
import { Button } from './utils/button'
import { Style } from './utils/type'
import { Columns } from './utils/column'
import { Content } from './components/blog_content'
import { useData } from '../data/useData'

export interface Blog extends Props<any> {
  props: Application['blog']
  style: Style<'div' | 'hr' | 'button' | 'a' | 'p' | 'input'>
}

interface Tabs extends Blog {
  onContentDelete: (index: number) => void
}

const Tabs = ({ props, style, onContentDelete }: Tabs) => (
  <TabV col={'25% 75%'} active={tabVcss.active} unactive={tabVcss.unactive}>
    {Array.from(new Set(props.map(v => v.type))).map(t => (
      <Tab name={t}>
        <Content
          props={find(props, v => v.type === t)}
          style={style}
          onDelete={onContentDelete}
        />
      </Tab>
    ))}
  </TabV>
)

export const Blog = ({ props, style }: Blog) => {
  const { div } = style
  // const { data, setData, edit, create, del } = useData(props)
  const [data, setData] = useState(props)
  return (
    <>
      <div style={div}>
        <Columns props={{ size: 2, col: '25% 75%' }}>
          <div>
            <Button name={'写新日志'} style={style.button} />
          </div>
          <div>
            <Search props={data} onChange={v => setData(v)} style={style} />
          </div>
        </Columns>
        <Tabs props={data} style={style} onContentDelete={index => {}} />
      </div>
    </>
  )
}
