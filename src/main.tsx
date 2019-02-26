import React from 'react'
import ReactDOM from 'react-dom'
import { Store$ } from './data/store'
import { Application } from './Application'
import { globalcss } from './css/css'
import { style } from './core/utils/style'

Store$.subscribe(state =>
  ReactDOM.render(
    <Application state={state} />,
    style(document.querySelector('body'))(globalcss.body)
  )
)
