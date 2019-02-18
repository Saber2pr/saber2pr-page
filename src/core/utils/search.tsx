import React, { Props } from 'react'
import { Style } from './type'
import { Application } from '../../type'

export interface Search extends Props<any> {
  props: Application['project']
  style: Style<'input'>
  onChange: (value: Application['project']) => void
}

function find<T>(array: T[], rule: (value: T) => boolean) {
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

export const Search = ({ props, onChange, style }: Search) => {
  const { input } = style
  const findProp = (keyword: string) =>
    find(props, value => !!value.name.match(keyword))
  const change = (event: React.ChangeEvent<HTMLInputElement>) =>
    onChange(findProp(event.target.value))
  const defaultValue = 'search...'
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
