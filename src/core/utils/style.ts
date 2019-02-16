import { CSSProperties } from 'react'

export const style = (target: EventTarget) => (style: CSSProperties) =>
  Object.keys(style).forEach(key => (target['style'][key] = style[key]))
