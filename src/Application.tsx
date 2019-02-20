import ReactDOM from 'react-dom'
import React from 'react'
import { Tabs, Tab } from './core/utils/tab'
import { Home } from './core/home'
import { Project } from './core/project'
import { Blog } from './core/blog'
import { About } from './core/about'
import { style } from './core/utils/style'
import { Application } from './type'
import { globalcss, tabscss, projectcss, aboutcss, blogcss } from './css/css'
import { homecss } from './css/homecss'
const data = require('../src/data/data.json')

const Application = ({ home, project, blog, about, common }: Application) => {
  const { footer } = common
  const { div } = globalcss
  return (
    <div style={div}>
      <Tabs active={tabscss.active} unactive={tabscss.unactive} bottom={footer}>
        <Tab name="Home">
          <Home props={home} style={homecss} />
        </Tab>
        <Tab name="Blog">
          <Blog props={blog} style={blogcss} />
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
