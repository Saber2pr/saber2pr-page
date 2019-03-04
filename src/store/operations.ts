import { IState } from './IState'

export const common_reset = (init?: IState) => (state: IState): IState =>
  init || {
    ...state,
    tabCur: 0
  }
export const blog_state_reset = (state: IState): IState => ({
  ...state,
  blog: {
    items: state.blog.items,
    blogState: 'view',
    contentState: 'out',
    tabCur: 0,
    contentCur: 0
  }
})

export const blog_items = (items: IState['blog']['items']) => (
  state: IState
): IState => ({
  ...state,
  blog: {
    ...state.blog,
    items: items
  }
})

export const blog_content_state = (type: IState['blog']['contentState']) => (
  state: IState
): IState => ({
  ...state,
  blog: {
    ...state.blog,
    contentState: type
  }
})

export const blog_content_index = (index: number) => (
  state: IState
): IState => ({
  ...state,
  blog: {
    ...state.blog,
    contentCur: index
  }
})

export const blog_content_del = (name: string) => (state: IState): IState => ({
  ...state,
  blog: {
    ...state.blog,
    items: state.blog.items.filter(b => b.name !== name)
  }
})

export const blog_state = (type: IState['blog']['blogState']) => (
  state: IState
): IState => ({
  ...state,
  blog: {
    ...state.blog,
    blogState: type
  }
})

export const blog_tab_index = (index: number) => (state: IState): IState => ({
  ...state,
  blog: {
    ...state.blog,
    tabCur: index
  }
})
