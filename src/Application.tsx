import React, { Props } from 'react'
import { IState } from './store/IState'
import { Store$ } from './store/store'
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
  homecss,
  logincss
} from './css/css'
import { Login } from './core/login'

interface Application extends Props<any> {
  state: IState
}

export const Application = ({ state }: Application) => {
  const { staticState, home, blog, project, about, tabCur, login } = state
  const { footer } = staticState
  const { div } = globalcss
  if (login) {
    return (
      <div style={div}>
        <Tabs
          active={tabscss.active}
          unactive={tabscss.unactive}
          bottom={footer}
          current={tabCur}
          onClick={index => Store$.setState({ tabCur: index })}
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
  } else {
    return (
      <Login
        style={logincss}
        onSuccess={() => Store$.setState({ login: true })}
      />
    )
  }
}
