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
  blog: {
    name: string
    type: 'cocos' | 'react'
    content: string
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
