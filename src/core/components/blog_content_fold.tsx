import React from 'react'
import { Store$ } from '../../store/store'
import { IState } from '../../interface'
import { Blog } from '../blog'
import { Fold } from '../utils/fold'
import { Anchor } from '../utils/anchor'
import {
  blog_content_index,
  blog_content_state,
  blog_tab_index
} from '../commonOp'

const record = (cur: number, size: number) =>
  (parseInt(String(cur / size)) + 1) * size

interface FoldNode {
  style: Pick<Blog['style'], 'div' | 'hr' | 'a' | 'button'>
  state: Pick<IState['blog'], 'items' | 'contentCur' | 'tabCur'>
}

export const ContentFold = ({ state, style }: FoldNode) => {
  const { div, hr } = style
  const { items, contentCur, tabCur } = state
  return (
    <Fold
      props={items}
      maxSize={record(contentCur, 6)}
      render={({ name }, index) => (
        <div style={div}>
          <Anchor
            name={name}
            href={'#'}
            style={style}
            onClick={() =>
              Store$.pipe(
                blog_content_index(index),
                blog_tab_index(tabCur),
                blog_content_state('enter')
              )
            }
          />
          <hr style={hr} />
        </div>
      )}
      style={style}
    />
  )
}
