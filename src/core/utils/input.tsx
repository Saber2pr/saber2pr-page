import React, { Props, CSSProperties } from 'react'

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

export interface Input extends Props<any> {
  style?: CSSProperties
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  defaultValue?: string
  list?: string
}

export const Input = ({
  style = {},
  defaultValue = '请输入...',
  onChange,
  list
}: Input) => (
  <input
    type="text"
    style={style}
    onChange={event => (onChange ? onChange(event) : null)}
    onFocus={onFocus(defaultValue)}
    onBlur={onBlur(defaultValue)}
    defaultValue={defaultValue}
    list={list}
  />
)
