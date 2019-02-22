import React, { Props, useState } from 'react'
import { Data } from '../type'
import { TabV, Tab } from './utils/tab'
import { tabVcss } from '../css/css'
import { find, Search } from './utils/search'
import { Button } from './utils/button'
import { Style } from './utils/type'
import { Columns } from './utils/column'
import { Content } from './components/blog_content'
import { ContentEditor } from './components/blog_content_edit'

export interface Blog extends Props<any> {
  props: Data['blog']
  style: Style<'div' | 'hr' | 'button' | 'a' | 'p' | 'input' | 'textarea'>
}

export const Blog = ({ props, style }: Blog) => {
  const { div } = style
  const [data, setData] = useState(props)
  const [state, setState] = useState<'new' | 'view'>('view')
  const view = (
    <>
      <div style={div}>
        <Columns props={{ size: 2, col: '25% 75%' }}>
          <div>
            <Button
              name={'写新日志'}
              style={style.button}
              onClick={() => setState('new')}
            />
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
          {Array.from(new Set(data.map(v => v.type))).map(t => (
            <Tab name={t}>
              <Content props={find(data, v => v.type === t)} style={style} />
            </Tab>
          ))}
        </TabV>
      </div>
    </>
  )
  if (state === 'view') {
    return view
  } else if (state === 'new') {
    return (
      <div style={div}>
        <ContentEditor
          index={-1}
          onOut={() => setState('view')}
          props={props}
          style={style}
        />
      </div>
    )
  }
}
