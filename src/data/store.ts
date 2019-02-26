import { Data } from '../interface'
import { Observable } from 'saber-observable'
import { Ajax } from 'saber-xhr'
const data: Data = require(`../../src/data/data.json`)

export const Store$ = new Observable(data)

// get data from server
Ajax('/src/data/data.json')
  .then(value =>
    Store$.pipe(() => {
      const data: Data = JSON.parse(value)
      data.common.tab_cur = 0
      return data
    })
  )
  .catch(err => {
    console.error('connect server fail!', err)
    Store$.dispatch()
  })

// post data to server
Store$.subscribe(data => {
  Ajax('/src/data/data.json', JSON.stringify(data))
    .then(() => console.log('post ok!'))
    .catch(err => console.error('post fail!', err))
})
