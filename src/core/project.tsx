import React, { useState, Props } from 'react'
import { LinkImg } from './utils/link'
import { Columns } from './utils/column'
import { Search } from './utils/search'
import { IState } from '../interface'
import { Style } from './utils/type'

export interface Project extends Props<any> {
  style: Style<'a' | 'img' | 'p' | 'div' | 'input' | 'button'>
  state: IState['project']
}

export const Project = ({ state, style }: Project) => {
  const { p, a, div, img, input, button } = style
  const [searched, setSearched] = useState(state)
  return (
    <>
      <Search props={state} onChange={v => setSearched(v)} style={{ input }} />
      <Columns props={{ size: 3 }} style={{ div }}>
        <div style={p}>Name</div>
        <div style={p}>View</div>
        <div style={p}>Infor</div>
      </Columns>
      <LinkImg props={searched} style={{ a, img, button, div, p }} />
    </>
  )
}
