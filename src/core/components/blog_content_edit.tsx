import React from 'react'
import { Blog } from '../blog'
import { Button } from '../utils/button'
import { useData } from '../../data/useData'

interface Editor extends Blog {
  index: number
  onOut: () => void
}

export const ContentEditor = ({ props, style, onOut, index }: Editor) => {
  const { button, textarea, p } = style
  const content = props[index] || props[0]
  const { save } = useData(props)
  const inputcss = {
    color: textarea.color,
    backgroundColor: textarea.backgroundColor,
    width: '85%',
    border: textarea.border,
    marginBottom: '10px'
  }
  const pcss = {
    fontSize: p.fontSize,
    color: p.color
  }
  return (
    <div>
      <div>
        <span style={pcss}>标题：</span>
        <input
          type="text"
          defaultValue={content.name}
          style={inputcss}
          onChange={e => (content.name = e.target.value)}
        />
      </div>
      <div>
        <span style={pcss}>分类：</span>
        <input
          type="text"
          defaultValue={content.type}
          style={inputcss}
          onChange={e => (content.type = e.target.value)}
        />
      </div>
      <div>
        <textarea
          defaultValue={content.content}
          style={textarea}
          onChange={e => (content.content = e.target.value)}
        />
      </div>
      <Button
        style={button}
        name={'保存'}
        onClick={() => {
          save(content, index)
          onOut()
        }}
      />
      <Button style={button} name={'返回'} onClick={onOut} />
    </div>
  )
}
