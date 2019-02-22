import React, { useState, Props } from 'react'
import { LinkImg } from './utils/link'
import { Columns } from './utils/column'
import { Search } from './utils/search'
import { Data } from '../type'
import { Style } from './utils/type'

export interface Project extends Props<any> {
  props: Data['project']
  style: Style<'a' | 'img' | 'p' | 'div' | 'input' | 'button'>
}

export const Project = ({ props, style }: Project) => {
  const { p } = style
  const [searched, setSearched] = useState(props)
  return (
    <>
      <Search props={props} onChange={v => setSearched(v)} style={style} />
      <Columns props={{ size: 3 }} style={style}>
        <div style={p}>Name</div>
        <div style={p}>View</div>
        <div style={p}>Infor</div>
      </Columns>
      <LinkImg props={searched} style={style} />
    </>
  )
}
