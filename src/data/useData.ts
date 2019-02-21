import { useState } from 'react'
import { Application } from '../type'

export interface Editor {
  edit: (content: string, index: any) => void
  del: (index: number) => void
  create: (blog: Application['blog'][0]) => void
  setData: React.Dispatch<React.SetStateAction<Application['blog']>>
}

export function useData(props: Application['blog']) {
  const [data, setData] = useState(props)
  const del = (index: number) => {
    data.splice(index, 1)
    console.log('del')
    setData(data)
  }
  const edit = (content: string, index) => {
    data[index].content = content
    setData(data)
  }
  const create = (blog: Application['blog'][0]) => {
    data.unshift(blog)
    setData(data)
  }
  return { data, edit, del, create, setData }
}
