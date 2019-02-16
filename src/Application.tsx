import ReactDOM from 'react-dom'
import React, { CSSProperties } from 'react'
import { Home } from './core/home'
import { data } from './data/data'
import { Project } from './core/project'
import { About } from './core/about'
import { Tabs, Tab } from './core/utils/tab'
import { objectCast } from './core/utils/object'

const globalcss: Record<
  'imgR' | 'p' | 'a' | 'div' | 'button',
  CSSProperties
> = {
  div: {
    textAlign: 'center',
    backgroundColor: '#191a21'
  },
  imgR: {
    width: '100px',
    borderRadius: '50%',
    overflow: 'hidden'
  },
  p: {
    marginTop: '30px',
    marginBottom: '30px',
    fontSize: '150%',
    color: '#f8ebc3'
  },
  a: {
    fontSize: '200%',
    width: '90px',
    marginTop: '30px',
    marginBottom: '30px',
    borderRadius: '100%',
    color: '#6272a4',
    textDecoration: 'none'
  },
  button: {
    color: '#2a334d',
    backgroundColor: '#191a21',
    border: '1px solid #000000',
    padding: '6px 10px',
    cursor: 'pointer'
  }
}

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
    name: string
    href: string
  }[]
  style: Record<'div', CSSProperties>
}

const css_cast = objectCast(globalcss)('imgR')({ img: globalcss.imgR })

const Application = ({ home, project, about, style }: Application) => {
  const { div } = style
  return (
    <div style={div}>
      <Tabs style={globalcss}>
        <Tab name="Home">
          <Home props={home} style={css_cast} />
        </Tab>
        <Tab name="Project">
          <Project props={project} style={css_cast} />
        </Tab>
        <Tab name="About">
          <About props={about} style={globalcss} />
        </Tab>
      </Tabs>
    </div>
  )
}

ReactDOM.render(
  <Application {...data} style={globalcss} />,
  document.querySelector('body')
)
