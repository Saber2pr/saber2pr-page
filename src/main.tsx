import React from 'react'
import ReactDOM from 'react-dom'
import { Store$ } from './store/store'
import { style } from './core/utils/style'
import { Application } from './Application'
import { globalcss } from './css/css'

Store$.subscribe(state =>
  ReactDOM.render(
    <Application state={state} />,
    document.querySelector('#root')
  )
)

style(document.querySelector('body'))(globalcss.body)
