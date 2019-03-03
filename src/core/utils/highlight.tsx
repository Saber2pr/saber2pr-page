/*
 * @Author: saber2pr
 * @Date: 2019-03-02 13:38:59
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-03-03 14:21:17
 */
import React, { Props } from 'react'

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

export type KeyWords = ColorWord[]

export interface HighLight extends Props<any> {
  content: string
  keywords: KeyWords
}

export const HighLight = ({ content, keywords }: HighLight) => {
  const finded = findKeys(content, keywords.map(k => k.word))
  const findColor = (index: number) =>
    keywords.find(keyword => keyword.word === finded[index].type).color
  const array = content
    .split(new RegExp(keywords.map(keyword => keyword.word).join('|')))
    .reduce<JSX.Element[]>(
      (out, val, index) =>
        finded[index]
          ? out.concat(
              <span key={index}>{val}</span>,
              <span style={{ color: findColor(index) }} key={index}>
                {finded[index].type}
              </span>
            )
          : out.concat(<span key={index}>{val}</span>),
      []
    )
  return <>{array}</>
}
