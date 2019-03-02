import React, { Props, CSSProperties } from 'react'
import { Style } from './type'
import { Para } from './paragraph'
import { HighLight, KeyWords } from './hightlight'

export interface CodeText extends Props<any> {
  content: string
  style: Style<'p' | 'pre'>
  start?: string
  end?: string
  keywords?: KeyWords
}

export const KEYWORDS: KeyWords = [
  {
    word: 'const',
    color: '#bb75b2'
  },
  {
    word: 'export',
    color: '#bb75b2'
  },
  {
    word: 'import',
    color: '#bb75b2'
  },
  {
    word: 'from',
    color: '#bb75b2'
  },
  {
    word: 'return',
    color: '#bb75b2'
  },
  {
    word: 'document',
    color: '#bb75b2'
  },
  {
    word: '=>',
    color: '#bb75b2'
  },
  {
    word: 'new',
    color: '#bb75b2'
  }
]

export const CodeText = ({
  content,
  style,
  start,
  end,
  keywords
}: CodeText) => {
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
          return [
            <pre>
              <p style={prestyle}>
                <HighLight
                  content={result[0]}
                  keywords={keywords || KEYWORDS}
                />
              </p>
            </pre>,
            <Para content={result[1]} style={pstyle} />
          ]
        } else {
          return <Para content={c} style={pstyle} />
        }
      })}
    </>
  )
}
