import { CSSProperties } from 'react'

export const style = <T>(target: T) => (style: CSSProperties): T => {
  Object.keys(style).forEach(key => (target['style'][key] = style[key]))
  return target
}
