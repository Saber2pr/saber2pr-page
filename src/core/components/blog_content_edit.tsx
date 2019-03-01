import React, { CSSProperties, useState } from 'react'
import { IState } from '../../store/IState'
import { Store$ } from '../../store/store'
import { Blog } from '../blog'
import { Button } from '../utils/button'
import { blog_content_state, blog_state } from '../../store/operations'

interface Editor {
  style: Pick<Blog['style'], 'button' | 'textarea' | 'p' | 'select' | 'option'>
  state: Pick<IState['blog'], 'blogState' | 'contentCur' | 'items'>
}

const defaultInput: Blog['state']['items'][0] = {
  name: '标题...',
  content: '写新内容...',
  type: '分类...(输入#号返回下拉菜单)',
  lastEdit: ''
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
          EditContent.lastEdit = new Date().toLocaleString()
          data.blog.items.unshift(EditContent)
        }
      } else if (blogState === 'view') {
        const index = data.blog.items.map(b => b.name).indexOf(EditContent.name)
        EditContent.lastEdit = new Date().toLocaleString()
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
  const { button, textarea, p, select, option } = style
  const EditContent = blogState === 'view' ? items[contentCur] : defaultInput
  const [tInState, setTInState] = useState<'normal' | 'newtype'>('normal')
  const inputcss: CSSProperties = {
    color: textarea.color,
    backgroundColor: textarea.backgroundColor,
    width: '85%',
    border: textarea.border,
    marginTop: '20px',
    marginBottom: '10px'
  }
  const selectBtncss: CSSProperties = {
    ...button,
    margin: '',
    height: '25px',
    padding: ''
  }
  const TitleInput = () => (
    <div>
      <span style={p}>标题：</span>
      <input
        type="text"
        defaultValue={EditContent.name}
        style={inputcss}
        onChange={e => (EditContent.name = e.target.value)}
      />
    </div>
  )
  const TypeInput = () => (
    <div>
      <span style={p}>分类：</span>
      <input
        type="text"
        defaultValue={EditContent.type}
        style={inputcss}
        onChange={e => {
          if (e.target.value === '#') {
            setTInState('normal')
          } else {
            EditContent.type = e.target.value
          }
        }}
      />
    </div>
  )
  const Select = () => (
    <div>
      <span style={p}>分类：</span>
      <select
        onChange={e => (EditContent.type = e.target.value)}
        style={select}
      >
        {items.map(({ type }) => (
          <option value={type} style={option}>
            {type}
          </option>
        ))}
      </select>
      <Button
        name={'新建分类'}
        style={selectBtncss}
        onClick={() => setTInState('newtype')}
      />
    </div>
  )
  const TypeSelect = () => {
    if (blogState === 'new') {
      if (tInState === 'normal') {
        return <Select />
      } else if (tInState === 'newtype') {
        return <TypeInput />
      }
    } else if (blogState === 'view') {
      return null
    }
  }
  const ContentInput = () => (
    <div>
      <textarea
        defaultValue={EditContent.content}
        style={textarea}
        onChange={e => (EditContent.content = e.target.value)}
      />
    </div>
  )
  const Options = () => (
    <div>
      <Button
        style={button}
        name={'保存'}
        onClick={save(blogState, EditContent)}
      />
      <Button style={button} name={'返回'} onClick={back(blogState)} />
    </div>
  )
  return (
    <>
      <TitleInput />
      <ContentInput />
      <TypeSelect />
      <Options />
    </>
  )
}
