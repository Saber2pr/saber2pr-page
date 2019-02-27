import React, { Props } from 'react'
import { IState } from '../store/IState'
import { Store$ } from '../store/store'
import { LinkImg } from './utils/link'
import { Columns } from './utils/column'
import { Search } from './utils/search'
import { Style } from './utils/type'

export interface Project extends Props<any> {
  style: Style<'a' | 'img' | 'p' | 'div' | 'input' | 'button'>
  state: IState['project']
}

export const Project = ({ state, style }: Project) => {
  const { p } = style
  return (
    <>
      <Search
        props={Store$.getInitState().project}
        onChange={v => Store$.setState({ project: v })}
        style={style}
      />
      <Columns props={{ size: 3 }} style={style}>
        <div style={p}>Name</div>
        <div style={p}>View</div>
        <div style={p}>Infor</div>
      </Columns>
      <LinkImg props={state} style={style} />
    </>
  )
}
