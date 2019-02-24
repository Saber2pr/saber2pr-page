import { Data } from '../type'

export const tab_index = (index: number) => (data: Data) => {
  data.common.tab_cur = index
  return data
}

export const blog_content_state = (
  type: Data['common']['blog_contentState']
) => (data: Data) => {
  data.common.blog_contentState = type
  return data
}

export const blog_content_index = (index: number) => (data: Data) => {
  data.common.blog_contentCur = index
  return data
}

export const blog_content_del = (name: string) => (data: Data) => {
  data.blog = data.blog.filter(b => b.name !== name)
  return data
}

export const blog_state = (type: Data['common']['blogState']) => (
  data: Data
) => {
  data.common.blogState = type
  return data
}

export const blog_tab_index = (index: number) => (data: Data) => {
  data.common.blog_tabcur = index
  return data
}
