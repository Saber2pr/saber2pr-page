import React from 'react'
import { Blog } from '../blog'
import { Fold } from '../utils/fold'
import { Anchor } from '../utils/anchor'

const record = (cur: number, size: number) =>
  (parseInt(String(cur / size)) + 1) * size

interface FoldNode extends Blog {
  current: number
  onEnter: (index: number) => void
}

export const ContentFold = ({ props, style, current, onEnter }: FoldNode) => {
  const { div, hr } = style
  return (
    <Fold
      props={props}
      maxSize={record(current, 6)}
      render={({ name }, index) => (
        <div style={div}>
          <Anchor
            name={name}
            href={'#'}
            style={style}
            onClick={() => {
              onEnter(index)
            }}
          />
          <hr style={hr} />
        </div>
      )}
      style={style}
    />
  )
}
