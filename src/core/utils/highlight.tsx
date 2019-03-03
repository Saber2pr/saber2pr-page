/*
 * @Author: saber2pr
 * @Date: 2019-03-02 13:38:59
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-03-03 14:21:17
 */
import React, { Props } from 'react'

export const findKeys = (content: string, keys: string[]) => {
  const record: {
    type: string
    index: number
  }[] = []
  keys.forEach(key => {
    let pos = content.indexOf(key, 0)
    while (pos !== -1) {
      record.push({ type: key, index: pos })
      pos = content.indexOf(key, pos + key.length)
    }
  })
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
              <span key={`jssjy4fpsfemmey5tor${index}`}>{val}</span>,
              <span
                style={{ color: findColor(index) }}
                key={`jssjyad2o7ym9vuerr${index}`}
              >
                {finded[index].type}
              </span>
            )
          : out.concat(<span key={`jssjyjafaimd4jkph76${index}`}>{val}</span>),
      []
    )
  return <>{array}</>
}
