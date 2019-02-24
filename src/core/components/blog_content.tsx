import React from 'react'
import { Blog } from '../blog'
import { ContentEditor } from './blog_content_edit'
import { ContentEnter } from './blog_content_enter'
import { ContentFold } from './blog_content_fold'
import { Data } from '../../type'

interface Content {
  props: Data['blog']
  style: Blog['style']
  state: Data['common']['blog_contentState']
  blogState: Data['common']['blogState']
  current: number
}

export const Content = ({
  props,
  style,
  state,
  current,
  blogState
}: Content) => {
  if (state === 'out') {
    return <ContentFold props={props} style={style} current={current} />
  } else if (state === 'enter') {
    return <ContentEnter props={props} style={style} current={current} />
  } else if (state === 'edit') {
    return (
      <ContentEditor
        props={props}
        style={style}
        current={current}
        blogState={blogState}
      />
    )
  }
}
