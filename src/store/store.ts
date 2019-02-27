import { IState } from '../interface'
import { Observable } from 'saber-observable'
import { Ajax } from 'saber-xhr'
const State: IState = require(`../../src/store/state.json`)

export const Store$ = new Observable(State)

// get data from server
Ajax('/src/data/data.json')
  .then(value =>
    Store$.pipe(() => {
      const data: IState = JSON.parse(value)
      data.common.tabCur = 0
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
