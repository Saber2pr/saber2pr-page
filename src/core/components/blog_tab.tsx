import React, { Props } from 'react'
import { IState } from '../../store/IState'
import { Store$ } from '../../store/store'
import { Blog } from '../blog'
import { TabV, Tab } from '../utils/tab'
import { Content } from './blog_content'
import { find } from '../utils/search'
import { blog_tab_index, blog_content_state } from '../../store/operations'
import { tabVcss } from '../../css/css'

export interface Tabs extends Props<any> {
  state: IState['blog']
  style: Pick<
    Blog['style'],
    | 'div'
    | 'hr'
    | 'button'
    | 'a'
    | 'p'
    | 'textarea'
    | 'pre'
    | 'select'
    | 'option'
  >
}

const out = index =>
  Store$.pipe(
    blog_tab_index(index),
    blog_content_state('out')
  )

export const TabContent = ({ state, style }: Tabs) => {
  const { items, tabCur } = state
  const tabs = Array.from(new Set(items.map(v => v.type))).map((t, index) => (
    <Tab name={t} key={index}>
      <Content
        state={{
          ...state,
          items: find(items, v => v.type === t)
        }}
        style={style}
      />
    </Tab>
  ))
  return (
    <TabV
      col={'25% 75%'}
      active={tabVcss.active}
      unactive={tabVcss.unactive}
      current={tabCur}
      onClick={out}
    >
      {tabs}
    </TabV>
  )
}
