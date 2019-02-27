import React, { useState } from 'react'
import { IState } from '../../interface'
import { Store$ } from '../../store/store'
import { Blog } from '../blog'
import { Button } from '../utils/button'
import { CodeText } from '../utils/codeText'
import {
  blog_content_state,
  blog_content_del,
  blog_content_index
} from '../commonOp'

interface ContentEnter {
  style: Pick<Blog['style'], 'p' | 'button' | 'pre'>
  state: Pick<IState['blog'], 'items' | 'contentCur'>
}

export const ContentEnter = ({ state, style }: ContentEnter) => {
  const { p, button } = style
  const { items, contentCur } = state
  const { name, content, type } = items[contentCur] || items[0]
  const [label, setLabel] = useState<'删除' | '确定删除？'>('删除')
  return (
    <div>
      <h1 style={p}>{name}</h1>
      <CodeText content={content} style={style} />
      <Button
        name="编辑"
        style={button}
        onClick={() =>
          Store$.pipe(
            blog_content_state('edit'),
            blog_content_index(contentCur)
          )
        }
      />
      <Button
        name={label}
        style={button}
        onClick={() => {
          if (label === '删除') {
            setLabel('确定删除？')
          } else if (label === '确定删除？') {
            Store$.pipe(
              blog_content_del(type, name),
              blog_content_state('out')
            )
          }
        }}
      />
      <Button
        name={'返回'}
        onClick={() => Store$.pipe(blog_content_state('out'))}
        style={button}
      />
    </div>
  )
}
