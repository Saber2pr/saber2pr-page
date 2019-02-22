import ReactDOM from 'react-dom'
import React, { Props } from 'react'
import { Tabs, Tab } from './core/utils/tab'
import { Home } from './core/home'
import { Project } from './core/project'
import { Blog } from './core/blog'
import { About } from './core/about'
import { style } from './core/utils/style'
import {
  globalcss,
  tabscss,
  projectcss,
  aboutcss,
  blogcss,
  homecss
} from './css/css'
import { Store } from './data/observable'
import { Data } from './type'

interface Application extends Props<any> {
  data: Data
}

Store.subscribe(async data => {
  const Application = ({ data }: Application) => {
    const { common, home, blog, project, about } = data
    const { footer, current } = common
    const { div } = globalcss
    const index = Object.keys(data).indexOf(current)
    return (
      <div style={div}>
        <Tabs
          active={tabscss.active}
          unactive={tabscss.unactive}
          bottom={footer}
          current={index}
        >
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
    <Application data={data} />,
    style(document.querySelector('body'))(globalcss.body)
  )
})
