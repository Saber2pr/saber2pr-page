import { IState } from './IState'

export const common_reset = (init?: IState) => (state: IState) => {
  const nextState = Object.assign(state, init || {})
  nextState.tabCur = 0
  return nextState
}

export const tab_index = (index: number) => (state: IState) => {
  state.tabCur = index
  return state
}

export const blog_state_reset = (state: IState) => {
  state.blog.blogState = 'view'
  state.blog.contentState = 'out'
  state.blog.tabCur = 0
  state.blog.contentCur = 0
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

export const blog_content_del = (name: string) => (state: IState) => {
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
