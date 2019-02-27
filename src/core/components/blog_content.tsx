import React from 'react'
import { IState } from '../../interface'
import { Blog } from '../blog'
import { ContentEditor } from './blog_content_edit'
import { ContentEnter } from './blog_content_enter'
import { ContentFold } from './blog_content_fold'

interface Content {
  style: Pick<
    Blog['style'],
    'button' | 'div' | 'hr' | 'a' | 'p' | 'pre' | 'textarea'
  >
  state: Pick<
    IState['blog'],
    'contentState' | 'items' | 'tabCur' | 'blogState' | 'contentCur'
  >
}

export const Content = ({ state, style }: Content) => {
  const { contentState } = state
  switch (contentState) {
    case 'edit':
      return <ContentEditor state={state} style={style} />
    case 'enter':
      return <ContentEnter state={state} style={style} />
    case 'out':
      return <ContentFold state={state} style={style} />
    default:
      throw new Error('contentState error')
  }
}
