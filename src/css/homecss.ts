import { globalcss } from './globalcss'
import { Home } from '../core/home'

export const homecss: Home['style'] = {
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
