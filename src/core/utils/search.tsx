import React, { Props } from 'react'
import { Application } from '../../Application'

export interface Search extends Props<any> {
  props: Application['project']
  onChange: (value: Application['project']) => void
}

function find<T>(array: T[], rule: (value: T) => boolean) {
  return array.reduce<T[]>((res, n) => (rule(n) ? res.concat(n) : res), [])
}

export const Search = ({ props, onChange }: Search) => {
  const findProp = (keyword: string) =>
    find(props, value => !!value.name.match(keyword))
  const change = (event: React.ChangeEvent<HTMLInputElement>) =>
    onChange(findProp(event.target.value))
  return <input type="text" style={{ marginTop: '30px' }} onChange={change} />
}
