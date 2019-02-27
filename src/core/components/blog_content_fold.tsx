import React from 'react'
import { Store$ } from '../../store/store'
import { IState } from '../../store/IState'
import { Blog } from '../blog'
import { Fold } from '../utils/fold'
import { Anchor } from '../utils/anchor'
import {
  blog_content_index,
  blog_content_state,
  blog_tab_index
} from '../../store/operations'

const record = (cur: number, size: number) =>
  (parseInt(String(cur / size)) + 1) * size

interface FoldNode {
  style: Pick<Blog['style'], 'div' | 'hr' | 'a' | 'button'>
  state: Pick<IState['blog'], 'items' | 'contentCur' | 'tabCur'>
}

const enter = (index: number, tabCur: Blog['state']['tabCur']) => () =>
  Store$.pipe(
    blog_content_index(index),
    blog_tab_index(tabCur),
    blog_content_state('enter')
  )

export const ContentFold = ({ state, style }: FoldNode) => {
  const { div, hr } = style
  const { items, contentCur, tabCur } = state
  const Item = ({ name, index }: { name: string; index: number }) => (
    <div style={div}>
      <Anchor
        name={name}
        href={'#'}
        style={style}
        onClick={enter(index, tabCur)}
      />
      <hr style={hr} />
    </div>
  )
  return (
    <Fold
      props={items}
      maxSize={record(contentCur, 6)}
      render={({ name }, index) => <Item name={name} index={index} />}
      style={style}
    />
  )
}
