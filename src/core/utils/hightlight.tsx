import React, { Props } from 'react'

export function join<T>(array: T[], value: T): T[] {
  const result: T[] = []
  for (let i = 0; i < array.length; i++) {
    result.push(array[i], value)
  }
  result.pop()
  return result
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
  const { word, color } = keywords[0]
  const array = join(
    content.split(word).map((word, index) => <span key={index}>{word}</span>),
    <span style={{ color: color }} key={0}>
      {word}
    </span>
  )
  return <>{array}</>
}
