import React, { useState } from 'react'
import { Application } from '../Application'
import { LinkImg } from './utils/link'
import { Propsx } from './utils/type'
import { Columns } from './utils/column'
import { Search } from './utils/search'

type Project = Propsx<Application['project'], 'a' | 'img' | 'p' | 'div'>

export const Project = ({ props, style }: Project) => {
  const { p, div } = style
  const [searched, setSearched] = useState(props)
  return (
    <>
      <Columns props={{ size: 3 }} style={{ div }}>
        <div style={p}>Name</div>
        <div style={p}>View</div>
        <div style={p}>Infor</div>
      </Columns>
      <Search props={props} onChange={v => setSearched(v)} />
      <LinkImg props={searched} style={style} />
    </>
  )
}
