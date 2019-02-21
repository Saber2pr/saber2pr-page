import React, { useState } from 'react'
import { Blog } from '../blog'
import { useData } from '../../data/useData'
import { Button } from '../utils/button'

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
  const content = props[current] || props[0]
  const { del } = useData(props)
  const [delState, setDelState] = useState<'删除' | '确定删除？'>('删除')
  return (
    <div>
      <h1 style={p}>{content.name}</h1>
      <p style={p}>{content.content}</p>
      <Button name="编辑" style={button} onClick={() => onEdit(current)} />
      <Button
        name={delState}
        style={button}
        onClick={() => {
          if (delState === '删除') {
            setDelState('确定删除？')
          } else if (delState === '确定删除？') {
            del(current)
            onOut()
          }
        }}
      />
      <Button name={'返回'} onClick={onOut} style={button} />
    </div>
  )
}
