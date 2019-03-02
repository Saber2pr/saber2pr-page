import React, { Props, CSSProperties } from 'react'
import { Style } from './type'
import { Para } from './paragraph'
import { HighLight, KeyWords } from './highlight'

export const dedup = <T extends Object>(array: T[], key: keyof T): T[] =>
  array.reduce<T[]>(
    (pre, cur) => (pre.find(v => v[key] === cur[key]) ? pre : pre.concat(cur)),
    []
  )

export interface CodeText extends Props<any> {
  content: string
  style: Style<'p' | 'pre'>
  start?: string
  end?: string
  keywords?: KeyWords
}

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
  const $keywords = dedup(keywords || KEYWORDS, 'word')
  return (
    <>
      {content.split(_start).map(c => {
        if (c.includes(_end)) {
          const result = c.split(_end)
          return [
            <pre>
              <p style={prestyle}>
                <HighLight content={result[0]} keywords={$keywords} />
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

export const KEYWORDS: KeyWords = [
  {
    word: 'const',
    color: '#bb75b2'
  },
  {
    word: 'let',
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
  },
  {
    word: 'if',
    color: '#bb75b2'
  },
  {
    word: 'else',
    color: '#bb75b2'
  },
  {
    word: 'switch',
    color: '#bb75b2'
  },
  {
    word: 'case',
    color: '#bb75b2'
  },
  {
    word: 'default',
    color: '#bb75b2'
  },
  {
    word: 'function',
    color: '#bb75b2'
  },
  {
    word: 'extends',
    color: '#bb75b2'
  },
  {
    word: 'interface',
    color: '#bb75b2'
  },
  {
    word: 'class',
    color: '#bb75b2'
  },
  {
    word: 'constructor',
    color: '#bb75b2'
  }
]
