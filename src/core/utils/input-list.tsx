import React, { CSSProperties } from 'react'
import { Input } from './input'

export interface InputList {
  list: string[]
  listId?: string
  style?: CSSProperties
  defaultValue?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const InputList = ({
  list,
  listId = 'list',
  style = {},
  defaultValue,
  onChange = () => {}
}: InputList) => (
  <>
    <Input
      list={listId}
      style={style}
      defaultValue={defaultValue}
      onChange={onChange}
    />
    <datalist id={listId}>
      {list.map((l, i) => (
        <option value={l} key={'jt4kzsouce4besj4leg' + i} />
      ))}
    </datalist>
  </>
)
