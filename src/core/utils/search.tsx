import React, { Props } from 'react'
import { Style } from './type'
import { Input } from './input'

export interface Search<T extends { name: string }> extends Props<any> {
  props: T[]
  style: Style<'input'>
  onChange: (value: T[]) => void
}

export function find<T>(array: T[], rule: (value: T) => boolean) {
  return array.reduce<T[]>((res, n) => (rule(n) ? res.concat(n) : res), [])
}

export function Search<T extends { name: string }>({
  props,
  onChange,
  style
}: Search<T>) {
  const { input } = style
  const findProp = (keyword: string) =>
    find(props, value => !!value.name.match(keyword))
  const change = (event: React.ChangeEvent<HTMLInputElement>) =>
    onChange(findProp(event.target.value))
  const defaultValue = '搜索...'
  return <Input style={input} onChange={change} defaultValue={defaultValue} />
}
