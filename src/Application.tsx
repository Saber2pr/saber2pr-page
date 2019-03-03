import React, { Props, useState } from 'react'
import { IState } from './store/IState'
import { Store$ } from './store/store'
import { tab_index } from './store/operations'
import { Tabs, Tab } from './core/utils/tab'
import { Login } from './core/login'
import { Home } from './core/home'
import { Project } from './core/project'
import { Blog } from './core/blog'
import { About } from './core/about'
import {
  globalcss,
  tabscss,
  projectcss,
  aboutcss,
  blogcss,
  homecss,
  logincss
} from './css/css'

interface Application extends Props<any> {
  state: IState
}

const Page = ({ state }: Application) => {
  const { common, home, blog, project, about } = state
  const { footer, tabCur } = common
  const { div } = globalcss
  return (
    <div style={div}>
      <Tabs
        active={tabscss.active}
        unactive={tabscss.unactive}
        bottom={footer}
        current={tabCur}
        onClick={index => Store$.pipe(tab_index(index))}
      >
        <Tab name="Home">
          <Home state={home} style={homecss} />
        </Tab>
        <Tab name="Blog">
          <Blog state={blog} style={blogcss} />
        </Tab>
        <Tab name="Project">
          <Project state={project} style={projectcss} />
        </Tab>
        <Tab name="About">
          <About state={about} style={aboutcss} />
        </Tab>
      </Tabs>
    </div>
  )
}

export const Application = ({ state }: Application) => {
  const [statu, setStatu] = useState<'login' | 'logined'>('login')
  switch (statu) {
    case 'login':
      return <Login style={logincss} onSuccess={() => setStatu('logined')} />
    case 'logined':
      return <Page state={state} />
    default:
      throw new Error('login statu error')
  }
}
