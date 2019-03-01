import React, { Props } from 'react'
import { IState } from '../store/IState'
import { Style } from './utils/type'
import { ContentEditor } from './components/blog_content_edit'
import { Header } from './components/blog_header'
import { TabContent } from './components/blog_tab'

export interface Blog extends Props<any> {
  style: Style<
    | 'div'
    | 'hr'
    | 'button'
    | 'a'
    | 'p'
    | 'input'
    | 'textarea'
    | 'pre'
    | 'select'
    | 'option'
  >
  state: IState['blog']
}

export const Blog = ({ state, style }: Blog) => {
  const { blogState } = state
  switch (blogState) {
    case 'new':
      return (
        <div style={style.div}>
          <ContentEditor state={state} style={style} />
        </div>
      )
    case 'view':
      return (
        <div style={style.div}>
          <Header style={style} />
          <TabContent state={state} style={style} />
        </div>
      )
    default:
      throw new Error('blogState error')
  }
}
