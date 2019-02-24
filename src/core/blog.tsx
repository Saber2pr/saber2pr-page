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
import { Store } from '../data/observable'
import { blog_state, blog_tab_index, blog_content_state } from './commonOp'
import { compose } from 'saber-observable'

export interface Blog extends Props<any> {
  props: Data['blog']
  style: Style<
    'div' | 'hr' | 'button' | 'a' | 'p' | 'input' | 'textarea' | 'pre'
  >
  tabcur: number
  contentcur: number
  blogState: Data['common']['blogState']
  contentState: Data['common']['blog_contentState']
}

export const Blog = ({
  props,
  style,
  tabcur,
  contentcur,
  blogState,
  contentState
}: Blog) => {
  const { div } = style
  const [data, setData] = useState(props)
  const view = (
    <>
      <div style={div}>
        <Columns props={{ size: 2, col: '25% 75%' }}>
          <div>
            <Button
              name={'写新日志'}
              style={style.button}
              onClick={() => Store.pipe(blog_state('new'))}
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
          current={tabcur}
          onClick={index =>
            Store.pipe(
              compose(
                blog_tab_index(index),
                blog_content_state('out')
              )
            )
          }
        >
          {Array.from(new Set(data.map(v => v.type))).map(t => (
            <Tab name={t}>
              <Content
                props={find(data, v => v.type === t)}
                style={style}
                state={contentState}
                contentCur={contentcur}
                tabcur={tabcur}
                blogState={blogState}
              />
            </Tab>
          ))}
        </TabV>
      </div>
    </>
  )
  if (blogState === 'view') {
    return view
  } else if (blogState === 'new') {
    return (
      <div style={div}>
        <ContentEditor
          props={data}
          style={style}
          current={contentcur}
          blogState={blogState}
        />
      </div>
    )
  }
}
