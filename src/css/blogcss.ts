import { Style } from '../core/utils/type'
import { globalcss } from './globalcss'
import { Blog } from '../core/blog'

const common: Style<'button'> = {
  button: {
    border: '1px solid #282a36',
    background: '#252633',
    marginTop: '5%',
    marginBottom: '5%',
    margin: '5px auto'
  }
}
export const tabVcss: Record<'active' | 'unactive', Style<'button'>> = {
  active: {
    button: {
      ...globalcss.button,
      ...common.button,
      color: '#6272a4'
    }
  },
  unactive: {
    button: {
      ...globalcss.button,
      ...common.button,
      color: '#2a334d'
    }
  }
}

export const blogcss: Blog['style'] = {
  div: { margin: '2% auto', width: '90%' },
  hr: {},
  button: {
    ...globalcss.button,
    color: '#2a334d',
    background: '#252633',
    border: '1px solid #282a36',
    marginTop: '5%',
    marginBottom: '5%'
  },
  input: {
    ...globalcss.input,
    marginTop: '20px'
  },
  a: {
    ...globalcss.a,
    margin: '0 auto',
    fontSize: '100%',
    cursor: 'pointer',
    lineHeight: '10%',
    fontFamily: globalcss.p.fontFamily
  },
  p: {
    ...globalcss.p,
    fontSize: '90%',
    color: '#799cb9',
    margin: '10px auto'
  },
  textarea: globalcss.textarea,
  pre: {
    ...globalcss.p,
    fontSize: '105%',
    color: '#8dc0a5',
    margin: '10px auto',
    fontFamily: ''
  },
  select: {
    ...globalcss.select,
    marginTop: '20px'
  },
  option: {
    ...globalcss.option
  }
}
