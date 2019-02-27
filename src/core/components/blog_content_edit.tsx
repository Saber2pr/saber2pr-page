import React, { CSSProperties } from 'react'
import { IState } from '../../interface'
import { Store$ } from '../../store/store'
import { Blog } from '../blog'
import { Button } from '../utils/button'
import { blog_content_state, blog_state } from '../commonOp'

interface Editor {
  style: Pick<Blog['style'], 'button' | 'textarea' | 'p'>
  state: Pick<IState['blog'], 'blogState' | 'contentCur' | 'items'>
}

export const ContentEditor = ({ state, style }: Editor) => {
  const { blogState, contentCur, items } = state
  const { button, textarea, p } = style
  const EditContent =
    blogState === 'view'
      ? items[contentCur]
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
    Store$.pipe(
      data => {
        if (blogState === 'new') {
          if (data.blog.items.find(b => b.name === EditContent.name)) {
            alert('标题名已存在！')
          } else {
            data.blog.tabCur = 0
            data.blog.items.unshift(EditContent)
          }
        } else if (blogState === 'view') {
          const index = data.blog.items
            .map(b => b.name)
            .indexOf(EditContent.name)
          data.blog[index] = EditContent
        }
        return data
      },
      blog_content_state('enter'),
      blog_state('view')
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
          Store$.pipe(
            blogState === 'view'
              ? blog_content_state('enter')
              : blog_content_state('out'),
            blog_state('view')
          )
        }
      />
    </div>
  )
}
