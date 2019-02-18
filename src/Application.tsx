import ReactDOM from 'react-dom'
import React from 'react'
import { Home } from './core/home'
import { Project } from './core/project'
import { About } from './core/about'
import { Tabs, Tab } from './core/utils/tab'
import { globalcss, tabscss, projectcss, aboutcss, data } from './css'
import { style } from './core/utils/style'

export interface Application {
  common: {
    footer: string
  }
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
    infor: string
  }[]
  about: {
    title: string
    content: string
    more: string
    contact: string
    links: {
      name: string
      href: string
    }[]
  }
}

const Application = ({ home, project, about, common }: Application) => {
  const { footer } = common
  const { div } = globalcss
  return (
    <div style={div}>
      <Tabs active={tabscss.active} unactive={tabscss.unactive} bottom={footer}>
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

ReactDOM.render(
  <Application {...data} />,
  style(document.querySelector('body'))(globalcss.body)
)
