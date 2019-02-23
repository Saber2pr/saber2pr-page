const data: Data = require('../../src/data/data.json')
import { Observable } from 'saber-observable'
import { Data } from '../type'
import { Ajax } from 'saber-xhr'

export const Store = new Observable(data)

Ajax('/src/data/data.json')
  .then(value =>
    Store.pipe(() => {
      const data: Data = JSON.parse(value)
      data.common.current = 'home'
      return data
    })
  )
  .catch(err => {
    console.error('connect server fail!', err)
    Store.pipe()
  })

Store.subscribe(data => {
  Ajax('/src/data/data.json', JSON.stringify(data))
    .then(() => console.log('post ok!'))
    .catch(err => console.error('post fail!', err))
})
