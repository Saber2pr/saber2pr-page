import { IState } from '../interface'

export const tab_index = (index: number) => (state: IState) => {
  state.common.tabCur = index
  return state
}

export const blog_items = (items: IState['blog']['items']) => (
  state: IState
) => {
  state.blog.items = items
  return state
}

export const blog_content_state = (type: IState['blog']['contentState']) => (
  state: IState
) => {
  state.blog.contentState = type
  return state
}

export const blog_content_index = (index: number) => (state: IState) => {
  state.blog.contentCur = index
  return state
}

export const blog_content_del = (type: string, name: string) => (
  state: IState
) => {
  state.blog.items = state.blog.items.filter(b => b.name !== name)
  return state
}

export const blog_state = (type: IState['blog']['blogState']) => (
  state: IState
) => {
  state.blog.blogState = type
  return state
}

export const blog_tab_index = (index: number) => (state: IState) => {
  state.blog.tabCur = index
  return state
}
