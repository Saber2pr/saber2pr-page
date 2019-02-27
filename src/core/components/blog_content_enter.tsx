import React, { useState } from 'react'
import { IState } from '../../store/IState'
import { Store$ } from '../../store/store'
import { Blog } from '../blog'
import { Button } from '../utils/button'
import { CodeText } from '../utils/codeText'
import {
  blog_content_state,
  blog_content_del,
  blog_content_index
} from '../../store/operations'

interface ContentEnter {
  style: Pick<Blog['style'], 'p' | 'button' | 'pre'>
  state: Pick<IState['blog'], 'items' | 'contentCur'>
}

const edit = (contentCur: IState['blog']['contentCur']) => () =>
  Store$.pipe(
    blog_content_state('edit'),
    blog_content_index(contentCur)
  )

const remove = (name: Blog['state']['items'][0]['name']) =>
  Store$.pipe(
    blog_content_del(name),
    blog_content_state('out')
  )

const back = () => Store$.pipe(blog_content_state('out'))

export const ContentEnter = ({ state, style }: ContentEnter) => {
  const { p, button } = style
  const { items, contentCur } = state
  const { name, content } = items[contentCur] || items[0]
  const [label, setLabel] = useState<'删除' | '确定删除？'>('删除')
  const Options = () => (
    <>
      <Button name="编辑" style={button} onClick={edit(contentCur)} />
      <Button
        name={label}
        style={button}
        onClick={() => {
          if (label === '删除') {
            setLabel('确定删除？')
          } else if (label === '确定删除？') {
            remove(name)
          }
        }}
      />
      <Button name={'返回'} onClick={back} style={button} />
    </>
  )
  return (
    <div>
      <h1 style={p}>{name}</h1>
      <CodeText content={content} style={style} />
      <Options />
    </div>
  )
}
