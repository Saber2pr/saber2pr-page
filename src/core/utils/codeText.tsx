import React, { Props, CSSProperties } from 'react'
import { Style } from './type'

export interface CodeText extends Props<any> {
  content: string
  style: Style<'p' | 'pre'>
  start?: string
  end?: string
}

export const CodeText = ({ content, style, start, end }: CodeText) => {
  const { p, pre } = style
  const _start = start || '```ts'
  const _end = end || '```'
  const commonstyle: CSSProperties = {
    textAlign: 'left'
  }
  const pstyle: CSSProperties = {
    ...p,
    ...commonstyle
  }
  const prestyle: CSSProperties = {
    ...pre,
    ...commonstyle,
    overflow: 'scroll',
    overflowY: 'hidden'
  }
  return (
    <>
      {content.split(_start).map(c => {
        if (c.includes(_end)) {
          const result = c.split(_end)
          return (
            <>
              <pre>
                <p style={prestyle}>{result[0]}</p>
              </pre>
              <p style={pstyle}>{result[1]}</p>
            </>
          )
        } else {
          return <p style={pstyle}>{c}</p>
        }
      })}
    </>
  )
}
