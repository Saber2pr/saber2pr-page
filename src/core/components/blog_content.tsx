import React from 'react'
import { Blog } from '../blog'
import { useState } from 'react'
import { ContentEditor } from './blog_content_edit'
import { ContentEnter } from './blog_content_enter'
import { ContentFold } from './blog_content_fold'

export const Content = ({ props, style }: Blog) => {
  const [state, setState] = useState<'enter' | 'out' | 'edit'>('out')
  const [cur, setCur] = useState(0)
  const Out = () => {
    setState('out')
  }
  const Enter = (index: number) => {
    setState('enter')
    setCur(index)
  }
  const Edit = () => {
    setState('edit')
  }
  if (state === 'out') {
    return (
      <ContentFold
        props={props}
        style={style}
        current={cur}
        onEnter={index => Enter(index)}
      />
    )
  } else if (state === 'enter') {
    return (
      <ContentEnter
        props={props}
        style={style}
        current={cur}
        onOut={Out}
        onEdit={Edit}
      />
    )
  } else if (state === 'edit') {
    return (
      <ContentEditor
        props={props}
        style={style}
        index={cur}
        onOut={() => Enter(cur)}
      />
    )
  }
}
