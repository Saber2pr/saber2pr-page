import React from 'react'
import { Blog } from '../blog'
import { Fold } from '../utils/fold'
import { Anchor } from '../utils/anchor'
import { Data } from '../../interface'
import {
  blog_content_index,
  blog_content_state,
  blog_tab_index
} from '../commonOp'
import { Store$ } from '../../data/store'

const record = (cur: number, size: number) =>
  (parseInt(String(cur / size)) + 1) * size

interface FoldNode {
  props: Data['blog']
  style: Blog['style']
  contentCur: Data['common']['blog_contentCur']
  tabcur: Data['common']['blog_tabcur']
}

export const ContentFold = ({ props, style, contentCur, tabcur }: FoldNode) => {
  const { div, hr } = style
  return (
    <Fold
      props={props}
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
                blog_tab_index(tabcur),
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
