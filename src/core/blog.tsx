import React, { Props, useState } from 'react'
import { IState } from '../interface'
import { Store$ } from '../store/store'
import { TabV, Tab } from './utils/tab'
import { find, Search } from './utils/search'
import { Button } from './utils/button'
import { Style } from './utils/type'
import { Columns } from './utils/column'
import { Content } from './components/blog_content'
import { ContentEditor } from './components/blog_content_edit'
import { blog_state, blog_tab_index, blog_content_state } from './commonOp'
import { tabVcss } from '../css/css'

export interface Blog extends Props<any> {
  style: Style<
    'div' | 'hr' | 'button' | 'a' | 'p' | 'input' | 'textarea' | 'pre'
  >
  state: IState['blog']
}

export const Blog = ({ state, style }: Blog) => {
  const { tabCur, blogState, items } = state
  const [data, setData] = useState(items)
  const view = (
    <>
      <div style={style.div}>
        <Columns props={{ size: 2, col: '25% 75%' }}>
          <div>
            <Button
              name={'写新日志'}
              style={style.button}
              onClick={() => Store$.pipe(blog_state('new'))}
            />
          </div>
          <div>
            <Search props={items} onChange={v => setData(v)} style={style} />
          </div>
        </Columns>
        <TabV
          col={'25% 75%'}
          active={tabVcss.active}
          unactive={tabVcss.unactive}
          current={tabCur}
          onClick={index =>
            Store$.pipe(
              blog_tab_index(index),
              blog_content_state('out')
            )
          }
        >
          {Array.from(new Set(data.map(v => v.type))).map(t => (
            <Tab name={t}>
              <Content
                state={{
                  ...state,
                  items: find(data, v => v.type === t)
                }}
                style={style}
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
      <div style={style.div}>
        <ContentEditor state={state} style={style} />
      </div>
    )
  }
}
