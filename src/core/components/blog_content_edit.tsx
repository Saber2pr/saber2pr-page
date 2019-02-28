import React, { CSSProperties } from 'react'
import { IState } from '../../store/IState'
import { Store$ } from '../../store/store'
import { Blog } from '../blog'
import { Button } from '../utils/button'
import { blog_content_state, blog_state } from '../../store/operations'

interface Editor {
  style: Pick<Blog['style'], 'button' | 'textarea' | 'p'>
  state: Pick<IState['blog'], 'blogState' | 'contentCur' | 'items'>
}

const defaultInput = {
  name: '标题...',
  type: '分类...',
  content: '写新内容...'
}

const save = (
  blogState: Blog['state']['blogState'],
  EditContent: Blog['state']['items'][0]
) => () =>
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
        const index = data.blog.items.map(b => b.name).indexOf(EditContent.name)
        data.blog.items[index] = EditContent
      }
      return data
    },
    blog_content_state('enter'),
    blog_state('view')
  )

const back = (blogState: Blog['state']['blogState']) => () =>
  Store$.pipe(
    blogState === 'view'
      ? blog_content_state('enter')
      : blog_content_state('out'),
    blog_state('view')
  )

export const ContentEditor = ({ state, style }: Editor) => {
  const { blogState, contentCur, items } = state
  const { button, textarea, p } = style
  const EditContent = blogState === 'view' ? items[contentCur] : defaultInput
  const inputcss: CSSProperties = {
    color: textarea.color,
    backgroundColor: textarea.backgroundColor,
    width: '85%',
    border: textarea.border,
    marginBottom: '10px'
  }
  const TitleInput = () => (
    <>
      <span style={p}>标题：</span>
      <input
        type="text"
        defaultValue={EditContent.name}
        style={inputcss}
        onChange={e => (EditContent.name = e.target.value)}
      />
    </>
  )
  const TypeInput = () => (
    <>
      <span style={p}>分类：</span>
      <input
        type="text"
        defaultValue={EditContent.type}
        style={inputcss}
        onChange={e => (EditContent.type = e.target.value)}
      />
    </>
  )
  const ContentInput = () => (
    <>
      <textarea
        defaultValue={EditContent.content}
        style={textarea}
        onChange={e => (EditContent.content = e.target.value)}
      />
    </>
  )
  const Options = () => (
    <>
      <Button
        style={button}
        name={'保存'}
        onClick={save(blogState, EditContent)}
      />
      <Button style={button} name={'返回'} onClick={back(blogState)} />
    </>
  )
  return (
    <div>
      <div>
        <TitleInput />
      </div>
      <div>
        <TypeInput />
      </div>
      <div>
        <ContentInput />
      </div>
      <Options />
    </div>
  )
}
