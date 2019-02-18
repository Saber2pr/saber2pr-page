import React, { useState } from 'react'
import { Application } from '../Application'
import { LinkImg } from './utils/link'
import { Propsx } from './utils/type'
import { Columns } from './utils/column'
import { Search } from './utils/search'

type Project = Propsx<
  Application['project'],
  'a' | 'img' | 'p' | 'div' | 'input'
>

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
