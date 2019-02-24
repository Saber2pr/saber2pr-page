export interface Data {
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
    name: string
    type: string
    content: string
  }[]
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
    tab_cur: number
    blog_tabcur: number
    blog_contentCur: number
    blogState: 'view' | 'new'
    blog_contentState: 'enter' | 'out' | 'edit'
  }
}
