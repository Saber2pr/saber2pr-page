import React, { CSSProperties, useState } from 'react'
import { IState } from '../../store/IState'
import { Store$ } from '../../store/store'
import { Blog } from '../blog'
import { Button } from '../utils/button'
import {
  blog_content_state,
  blog_state,
  blog_content_save
} from '../../store/operations'

export interface Editor {
  style: Pick<Blog['style'], 'button' | 'textarea' | 'p' | 'select' | 'option'>
  state: Pick<IState['blog'], 'blogState' | 'contentCur' | 'items'>
}

const defaultInput: Blog['state']['items'][0] = {
  name: '标题...',
  content: '写新内容...',
  type: '',
  lastEdit: ''
}

const save = (
  blogState: IState['blog']['blogState'],
  EditContent: IState['blog']['items'][0]
) => () =>
  Store$.pipe(
    blog_content_save(blogState, EditContent),
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
  const types = Array.from(new Set(items.map(i => i.type)))
  const EditContent =
    blogState === 'view'
      ? items[contentCur]
      : Object.assign(defaultInput, { type: types[0] })
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
        {types.map((t, index) => (
          <option value={t} style={option} key={index}>
            {t}
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
