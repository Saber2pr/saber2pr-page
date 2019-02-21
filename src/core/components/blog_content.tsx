import React from 'react'
import { Blog } from '../blog'
import { useState } from 'react'
import { Fold } from '../utils/fold'
import { Anchor } from '../utils/anchor'
import { Button } from '../utils/button'

const record = (cur: number, size: number) =>
  (parseInt(String(cur / size)) + 1) * size

interface FoldNode extends Blog {
  cur: number
  onEnter: (index: number) => void
}

const FoldNode = ({ props, style, cur, onEnter }: FoldNode) => {
  const { div, hr } = style
  return (
    <Fold
      props={props}
      maxSize={record(cur, 6)}
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

interface ContentNode extends Blog {
  current: number
  onOut: () => void
  onDelete: (index: number) => void
}

const ContentNode = ({
  props,
  style,
  onOut,
  current,
  onDelete
}: ContentNode) => {
  const { p, button } = style
  const content = props[current] || props[0]
  return (
    <div>
      <h1 style={p}>{content.name}</h1>
      <p style={p}>{content.content}</p>
      <Button name="编辑" style={button} />
      <Button
        name="删除"
        style={button}
        onClick={() => {
          onOut()
          onDelete(current)
        }}
      />
      <Button name={'返回'} onClick={onOut} style={button} />
    </div>
  )
}

export interface Content extends Blog {
  onDelete: (index: number) => void
}

export const Content = ({ props, style, onDelete }: Content) => {
  const [state, setState] = useState<'enter' | 'out'>('out')
  const [cur, setCur] = useState(0)
  const Out = () => {
    setState('out')
  }
  const Enter = (index: number) => {
    setState('enter')
    setCur(index)
  }
  if (state === 'out') {
    return (
      <FoldNode
        props={props}
        style={style}
        cur={cur}
        onEnter={index => Enter(index)}
      />
    )
  } else if (state === 'enter') {
    return (
      <ContentNode
        props={props}
        style={style}
        onOut={Out}
        current={cur}
        onDelete={onDelete}
      />
    )
  }
}
