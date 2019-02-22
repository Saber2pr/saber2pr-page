import React from 'react'
import { Blog } from '../blog'
import { Button } from '../utils/button'
import { Store } from '../../data/observable'

interface Editor extends Blog {
  index: number
  onOut: () => void
}

export const ContentEditor = ({ props, style, onOut, index }: Editor) => {
  const { button, textarea, p } = style
  const EditContent = props[index] || {
    name: '标题...',
    type: '分类...',
    content: '写新内容...'
  }
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
  const save = () => {
    Store.pipe(data => {
      data.common.current = 'blog'
      if (index === -1) {
        if (data.blog.find(b => b.name === EditContent.name)) {
          alert('标题名已存在！')
        } else {
          data.blog.unshift(EditContent)
          onOut()
        }
      } else {
        data.blog[index] = EditContent
        onOut()
      }
      return data
    })
  }
  return (
    <div>
      <div>
        <span style={pcss}>标题：</span>
        <input
          type="text"
          defaultValue={EditContent.name}
          style={inputcss}
          onChange={e => (EditContent.name = e.target.value)}
        />
      </div>
      <div>
        <span style={pcss}>分类：</span>
        <input
          type="text"
          defaultValue={EditContent.type}
          style={inputcss}
          onChange={e => (EditContent.type = e.target.value)}
        />
      </div>
      <div>
        <textarea
          defaultValue={EditContent.content}
          style={textarea}
          onChange={e => (EditContent.content = e.target.value)}
        />
      </div>
      <Button style={button} name={'保存'} onClick={save} />
      <Button style={button} name={'返回'} onClick={onOut} />
    </div>
  )
}
