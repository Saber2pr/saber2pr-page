import { Style } from '../core/utils/type'
import { globalcss } from './globalcss'

const tabsLength = 4
const tabswidth = `${100 / tabsLength}%`

const common: Style<'button' | 'bottom' | 'hr'> = {
  button: {
    ...globalcss.button,
    width: tabswidth,
    fontSize: '150%'
  },
  bottom: globalcss.bottom,
  hr: globalcss.hr
}

export const tabscss: Record<
  'active' | 'unactive',
  Style<'button' | 'bottom' | 'hr'>
> = {
  active: {
    ...common,
    button: {
      ...common.button,
      color: '#6272a4',
      backgroundColor: '#282a36',
      boxShadow: '#000000 -5px 5px 10px'
    }
  },
  unactive: {
    ...common,
    button: {
      ...common.button,
      color: '#2a334d',
      backgroundColor: '#191a21',
      boxShadow: ''
    }
  }
}
