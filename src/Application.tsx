import React, { Props } from 'react'
import { IState } from './interface'
import { Store$ } from './store/store'
import { tab_index } from './core/commonOp'
import { Tabs, Tab } from './core/utils/tab'
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
  homecss
} from './css/css'

interface Application extends Props<any> {
  state: IState
}

export const Application = ({ state }: Application) => {
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
