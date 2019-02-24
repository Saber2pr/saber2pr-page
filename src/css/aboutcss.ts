import { globalcss } from './globalcss'
import { About } from '../core/about'

export const aboutcss: About['style'] = {
  p: {
    ...globalcss.p,
    width: '80%',
    margin: '30px auto',
    fontSize: '95%'
  },
  a: globalcss.a
}
