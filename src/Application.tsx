import ReactDOM from 'react-dom'
import React from 'react'
import { Home } from './core/home'
import { Project } from './core/project'
import { About } from './core/about'
import { Tabs, Tab } from './core/utils/tab'
import { globalcss, tabscss, projectcss, aboutcss, data } from './css'

export interface Application {
  home: {
    title: string
    logo: string
    author: string
    readME: string
    websites: {
      name: string
      href: string
    }[]
  }
  project: {
    name: string
    href: string
    src: string
  }[]
  about: {
    title: string
    content: string
    links: {
      name: string
      href: string
    }[]
  }
}

const Application = ({ home, project, about }: Application) => {
  const { div } = globalcss
  return (
    <div style={div}>
      <Tabs active={tabscss.active} unactive={tabscss.unactive}>
        <Tab name="Home">
          <Home props={home} style={globalcss} />
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

const container = document.querySelector('body')
container.setAttribute('style', 'background-color:#191a21')
ReactDOM.render(<Application {...data} />, container)
