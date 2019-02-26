import React, { Props } from 'react'
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
import { Data } from './interface'
import { tab_index } from './core/commonOp'
import { Store$ } from './data/store'

interface Application extends Props<any> {
  state: Data
}

export const Application = ({ state }: Application) => {
  const { common, home, blog, project, about } = state
  const {
    footer,
    tab_cur,
    blog_tabcur,
    blog_contentCur,
    blogState,
    blog_contentState
  } = common
  const { div } = globalcss
  return (
    <div style={div}>
      <Tabs
        active={tabscss.active}
        unactive={tabscss.unactive}
        bottom={footer}
        current={tab_cur}
        onClick={index => Store$.pipe(tab_index(index))}
      >
        <Tab name="Home">
          <Home props={home} style={homecss} />
        </Tab>
        <Tab name="Blog">
          <Blog
            props={blog}
            style={blogcss}
            tabcur={blog_tabcur}
            blogState={blogState}
            contentState={blog_contentState}
            contentcur={blog_contentCur}
          />
        </Tab>
        <Tab name="Project">
          <Project props={project} style={projectcss} />
        </Tab>
        <Tab name="About">
          <About props={about} style={aboutcss} />
        </Tab>
      </Tabs>
    </div>
  )
}
