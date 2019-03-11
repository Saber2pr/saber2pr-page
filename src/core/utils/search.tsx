import React, { Props, CSSProperties } from 'react'
import { InputList } from './input-list'

export interface Search<T extends { name: string }> extends Props<any> {
  props: T[]
  style?: CSSProperties
  onChange: (value: T[]) => void
}

export function find<T>(array: T[], rule: (value: T) => boolean) {
  return array.reduce<T[]>((res, n) => (rule(n) ? res.concat(n) : res), [])
}

export function Search<T extends { name: string }>({
  props,
  onChange,
  style = {}
}: Search<T>) {
  const findProp = (keyword: string) =>
    find(props, value => !!value.name.match(keyword))
  const change = (event: React.ChangeEvent<HTMLInputElement>) =>
    onChange(findProp(event.target.value))
  const defaultValue = '搜索...'
  return (
    <InputList
      list={props.map(p => p.name)}
      style={style}
      onChange={change}
      defaultValue={defaultValue}
    />
  )
}
