import { useState } from 'react'
import { Application } from '../type'

export function useData(props: Application['blog']) {
  const [data, setData] = useState(props)
  const del = (index: number) => {
    data.splice(index, 1)
    console.log('del')
    setData(data)
  }
  const save = (value: Application['blog'][0], index: number) => {
    data[index] = value
    console.log('save')
    setData(data)
  }
  const create = (blog: Application['blog'][0]) => {
    data.unshift(blog)
    console.log('create')
    setData(data)
  }
  return { data, save, del, create, setData }
}
