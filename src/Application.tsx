import ReactDOM from 'react-dom'
import React, { CSSProperties } from 'react'
import { Home } from './core/home'
import { data } from './data/data'
import { Project } from './core/project'
import { About } from './core/about'
import { Tabs, Tab } from './core/utils/tab'

const globalcss: Record<'img' | 'p' | 'a' | 'div' | 'button', CSSProperties> = {
  div: {
    boxShadow: '#000000 0px 5px 10px',
    backgroundColor: '#282a36',
    border: '1px solid #191a21',
    textAlign: 'center'
  },
  img: {
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
    lineHeight: '50px',
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

const projectcss: Record<'img' | 'a', CSSProperties> = {
  img: {
    width: '40%',
    overflow: 'hidden'
  },
  a: globalcss.a
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
}

const Application = ({ home, project, about }: Application) => {
  const { div } = globalcss
  return (
    <div style={div}>
      <Tabs style={globalcss}>
        <Tab name="Home">
          <Home props={home} style={globalcss} />
        </Tab>
        <Tab name="Project">
          <Project props={project} style={projectcss} />
        </Tab>
        <Tab name="About">
          <About props={about} style={globalcss} />
        </Tab>
      </Tabs>
    </div>
  )
}

ReactDOM.render(<Application {...data} />, document.querySelector('#root'))
