import React, { Props } from 'react'
import { Store$ } from '../../store/store'
import { Blog } from '../blog'
import { Columns } from '../utils/column'
import { Button } from '../utils/button'
import { Search } from '../utils/search'
import { blog_state, blog_items } from '../../store/operations'

export interface Header extends Props<any> {
  style: Pick<Blog['style'], 'button' | 'input'>
}

export const Header = ({ style }: Header) => (
  <Columns props={{ size: 2, col: '25% 75%' }}>
    <div>
      <Button
        name={'写新日志'}
        style={style.button}
        onClick={() => Store$.pipe(blog_state('new'))}
      />
    </div>
    <div>
      <Search
        props={Store$.getInitState().blog.items}
        onChange={v => Store$.pipe(blog_items(v))}
        style={style.input}
      />
    </div>
  </Columns>
)
