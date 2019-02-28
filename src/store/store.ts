import { IState } from './IState'
import { Observable } from 'saber-observable'
import { Ajax } from 'saber-xhr'
import { common_reset, blog_state_reset } from './operations'
const State: IState = require(`../../src/store/state.json`)

export const Store$ = new Observable(State)

// get data from server
Ajax('/src/store/state.json')
  .then(value =>
    Store$.pipe(
      common_reset(JSON.parse(value)),
      blog_state_reset
    )
  )
  .catch(err => {
    console.warn('connect server fail!', err)
    Store$.dispatch()
  })

// post data to server
Store$.subscribe(data => {
  Ajax('/src/store/state.json', JSON.stringify(data))
    .then(() => console.log('post ok!'))
    .catch(err => console.warn('post fail!', err))
})
