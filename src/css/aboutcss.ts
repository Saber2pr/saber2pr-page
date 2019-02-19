import { globalcss } from './globalcss'
import { Style } from '../core/utils/type'

export const aboutcss: Style<'p' | 'a'> = {
  p: {
    ...globalcss.p,
    width: '80%',
    margin: '30px auto',
    lineHeight: '160%',
    fontSize: '100%'
  },
  a: globalcss.a
}
