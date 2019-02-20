import { Style } from '../core/utils/type'
import { globalcss } from './globalcss'

export const homecss: Style<'img' | 'a' | 'p'> = {
  a: {
    ...globalcss.a,
    fontSize: '150%'
  },
  img: globalcss.img,
  p: {
    ...globalcss.p,
    fontSize: '120%'
  }
}
