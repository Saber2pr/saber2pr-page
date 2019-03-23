import { IState } from './IState'
import { Ajax } from 'saber-xhr'

export const state_reset = (init?: IState) => (state: IState): IState => {
  const next = {
    ...state,
    tabCur: 0
  }
  init.tabCur = 0
  return init || next
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

export const blog_items_reset = (items: IState['blog']['items']) => (
  state: IState
): IState => ({
  ...state,
  blog: {
    ...state.blog,
    items
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

export const blog_content_del = (name: string) => (state: IState): IState => {
  const next = {
    ...state,
    blog: {
      ...state.blog,
      items: state.blog.items.filter(b => b.name !== name)
    }
  }
  Ajax('/src/store/state.json', JSON.stringify(next)).catch(() => void 0)
  return next
}

export const blog_content_save = (
  blogState: IState['blog']['blogState'],
  EditContent: IState['blog']['items'][0]
) => (state: IState): IState => {
  if (blogState === 'new') {
    if (state.blog.items.find(b => b.name === EditContent.name)) {
      alert('标题名已存在！')
    } else {
      state.blog.tabCur = 0
      EditContent.lastEdit = new Date().toLocaleString()
      state.blog.items.unshift(EditContent)
    }
  } else if (blogState === 'view') {
    const index = state.blog.items.map(b => b.name).indexOf(EditContent.name)
    EditContent.lastEdit = new Date().toLocaleString()
    state.blog.items[index] = EditContent
  }
  Ajax('/src/store/state.json', JSON.stringify(state)).catch(() => void 0)
  return state
}

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

export const project_reset = (project: IState['project']) => (
  state: IState
): IState => ({
  ...state,
  project
})
