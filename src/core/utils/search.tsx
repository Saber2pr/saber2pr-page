import React, { Props } from 'react'
import { Style } from './type'

export interface Search<T extends { name: string }> extends Props<any> {
  props: T[]
  style: Style<'input'>
  onChange: (value: T[]) => void
}

export function find<T>(array: T[], rule: (value: T) => boolean) {
  return array.reduce<T[]>((res, n) => (rule(n) ? res.concat(n) : res), [])
}

const onFocus = (defaultValue: string) => (
  event: React.FocusEvent<HTMLInputElement>
) => {
  if (event.target.value === defaultValue) {
    event.target.value = ''
  } else {
    return
  }
}

const onBlur = (defaultValue: string) => (
  event: React.FocusEvent<HTMLInputElement>
) => {
  if (event.target.value === '') {
    event.target.value = defaultValue
  } else {
    return
  }
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
  return (
    <input
      type="text"
      style={input}
      onChange={change}
      onFocus={onFocus(defaultValue)}
      onBlur={onBlur(defaultValue)}
      defaultValue={defaultValue}
    />
  )
}
