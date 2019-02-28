export interface IState {
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
  blog: {
    items: {
      name: string
      type: string
      content: string
      lastEdit: string
    }[]
    tabCur: number
    contentCur: number
    blogState: 'view' | 'new'
    contentState: 'enter' | 'out' | 'edit'
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
  common: {
    footer: string
    tabCur: number
  }
}
