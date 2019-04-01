import React, { Props, CSSProperties } from 'react'
import { Para } from './paragraph'
import { HighLight, KeyWords } from './highlight'

export const dedup = <T extends Object>(array: T[], key: keyof T): T[] =>
  array.reduce<T[]>(
    (pre, cur) => (pre.find(v => v[key] === cur[key]) ? pre : pre.concat(cur)),
    []
  )

export interface CodeText extends Props<any> {
  content: string
  style?: {
    p?: CSSProperties
    pre?: CSSProperties
  }
  start?: string
  end?: string
  keywords?: KeyWords
}

export const CodeText = ({
  content,
  style = {
    p: {},
    pre: {
      backgroundColor: '#282c34',
      color: 'white',
      borderRadius: '10px',
      padding: '10px'
    }
  },
  start = '```ts\n',
  end = '```',
  keywords
}: CodeText) => {
  const { p, pre } = style
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
    overflowX: 'auto'
  }
  const $keywords = dedup(keywords || KEYWORDS, 'word')
  return (
    <>
      {content.split(start).map((c, index) => {
        if (c.includes(end)) {
          const result = c.split(end)
          return (
            <span key={`jssjw4dghn5i8lnpwxv${index}`}>
              <pre>
                <p style={prestyle}>
                  <HighLight content={result[0]} keywords={$keywords} />
                </p>
              </pre>
              <Para content={result[1]} style={pstyle} />
            </span>
          )
        } else {
          return (
            <Para
              content={c}
              style={pstyle}
              key={`jssjx2jjjebnh3do7lp${index}`}
            />
          )
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
  },
  {
    word: ':',
    color: '#bb75b2'
  },
  {
    word: ' = ',
    color: '#bb75b2'
  },
  {
    word: '===',
    color: '#bb75b2'
  },
  {
    word: '!==',
    color: '#bb75b2'
  },
  {
    word: 'while',
    color: '#bb75b2'
  },
  {
    word: 'type',
    color: '#bb75b2'
  },
  {
    word: 'typeof',
    color: '#bb75b2'
  },
  {
    word: 'this',
    color: '#bb75b2'
  }
]
