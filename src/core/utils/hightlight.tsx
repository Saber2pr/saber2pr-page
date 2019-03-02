import React, { Props } from 'react'

export function join<T>(array: T[], value: T): T[] {
  const result: T[] = []
  for (let i = 0; i < array.length; i++) {
    result.push(array[i], value)
  }
  result.pop()
  return result
}

const findKeys = (content: string, keys: string[]) => {
  const record: {
    type: string
    index: number
  }[] = []
  const depwalk = (str: string, keys: string[], index = 0) => {
    if (index === keys.length) {
      return
    }
    const key = keys[index]
    let start = 0
    let pos = str.indexOf(key, start)
    while (pos !== -1) {
      record.push({ type: key, index: pos })
      pos = str.indexOf(key, pos + key.length)
    }
    depwalk(str, keys, index + 1)
  }
  depwalk(content, keys)
  return record.sort((a, b) => a.index - b.index)
}

export type ColorWord = {
  word: string
  color: string
}

export interface HighLight extends Props<any> {
  content: string
  keywords: ColorWord[]
}

export const HighLight = ({ content, keywords }: HighLight) => {
  const finded = findKeys(content, keywords.map(k => k.word))
  const array = content.split(
    new RegExp(keywords.map(keyword => keyword.word).join('|'))
  )
  const ele = array.reduce<JSX.Element[]>(
    (out, val, index) =>
      finded[index]
        ? out.concat(
            <span>{val}</span>,
            <span
              style={{
                color: keywords.find(
                  keyword => keyword.word === finded[index].type
                ).color
              }}
            >
              {finded[index].type}
            </span>
          )
        : out.concat(<span>{val}</span>),
    []
  )
  return <>{ele}</>
}
