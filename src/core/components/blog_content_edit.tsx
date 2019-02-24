import React, { CSSProperties } from 'react'
import { Blog } from '../blog'
import { Button } from '../utils/button'
import { Store } from '../../data/observable'
import { Data } from '../../type'
import { blog_content_state, blog_state } from '../commonOp'
import { compose } from 'saber-observable'

interface Editor {
  props: Data['blog']
  style: Blog['style']
  current: number
  blogState: Data['common']['blogState']
}

export const ContentEditor = ({ props, style, current, blogState }: Editor) => {
  const { button, textarea, p } = style
  const EditContent =
    blogState === 'view'
      ? props[current]
      : {
          name: '标题...',
          type: '分类...',
          content: '写新内容...'
        }
  const inputcss: CSSProperties = {
    color: textarea.color,
    backgroundColor: textarea.backgroundColor,
    width: '85%',
    border: textarea.border,
    marginBottom: '10px'
  }
  const pcss: CSSProperties = {
    fontSize: p.fontSize,
    color: p.color
  }
  const save = () =>
    Store.pipe(
      compose(
        data => {
          if (blogState === 'new') {
            if (data.blog.find(b => b.name === EditContent.name)) {
              alert('标题名已存在！')
            } else {
              data.blog.unshift(EditContent)
            }
          } else if (blogState === 'view') {
            const index = data.blog.map(b => b.name).indexOf(EditContent.name)
            data.blog[index] = EditContent
          }
          return data
        },
        blog_content_state('enter'),
        blog_state('view')
      )
    )
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
      <Button
        style={button}
        name={'返回'}
        onClick={() =>
          Store.pipe(
            compose(
              blog_content_state('enter'),
              blog_state('view')
            )
          )
        }
      />
    </div>
  )
}
