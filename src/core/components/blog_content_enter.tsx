import React, { useState } from 'react'
import { Blog } from '../blog'
import { Button } from '../utils/button'
import { Store } from '../../data/observable'
import { CodeText } from '../utils/codeText'
import { Data } from '../../type'
import {
  blog_content_state,
  blog_content_del,
  blog_content_index
} from '../commonOp'
import { compose } from 'saber-observable'

interface ContentEnter {
  props: Data['blog']
  style: Blog['style']
  current: number
}

export const ContentEnter = ({ props, style, current }: ContentEnter) => {
  const { p, button } = style
  const blog = props[current] || props[0]
  const [delState, setDelState] = useState<'删除' | '确定删除？'>('删除')
  return (
    <div>
      <h1 style={p}>{blog.name}</h1>
      <CodeText content={blog.content} style={style} />
      <Button
        name="编辑"
        style={button}
        onClick={() =>
          Store.pipe(
            compose(
              blog_content_state('edit'),
              blog_content_index(current)
            )
          )
        }
      />
      <Button
        name={delState}
        style={button}
        onClick={() => {
          if (delState === '删除') {
            setDelState('确定删除？')
          } else if (delState === '确定删除？') {
            Store.pipe(
              compose(
                blog_content_del(blog.name),
                blog_content_state('out')
              )
            )
          }
        }}
      />
      <Button
        name={'返回'}
        onClick={() => Store.pipe(blog_content_state('out'))}
        style={button}
      />
    </div>
  )
}
