import React, { useState } from 'react'
import { Blog } from '../blog'
import { Button } from '../utils/button'
import { Store } from '../../data/observable'
import { CodeText } from '../utils/codeText'

interface ContentNode extends Blog {
  current: number
  onOut: () => void
  onEdit: (index: number) => void
}

export const ContentEnter = ({
  props,
  style,
  onOut,
  current,
  onEdit
}: ContentNode) => {
  const { p, button } = style
  const blog = props[current] || props[0]
  const [delState, setDelState] = useState<'删除' | '确定删除？'>('删除')
  return (
    <div>
      <h1 style={p}>{blog.name}</h1>
      <CodeText content={blog.content} style={{ p, pre: p }} />
      <Button name="编辑" style={button} onClick={() => onEdit(current)} />
      <Button
        name={delState}
        style={button}
        onClick={() => {
          if (delState === '删除') {
            setDelState('确定删除？')
          } else if (delState === '确定删除？') {
            Store.pipe(data => {
              data.common.current = 'blog'
              data.blog = data.blog.filter(b => b.name !== blog.name)
              return data
            })
            onOut()
          }
        }}
      />
      <Button name={'返回'} onClick={onOut} style={button} />
    </div>
  )
}
