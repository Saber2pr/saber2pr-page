import { Style } from '../core/utils/type'
import { globalcss } from './globalcss'

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

export const blogcss: Style<
  'div' | 'hr' | 'button' | 'input' | 'a' | 'p' | 'textarea' | 'pre'
> = {
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
    marginTop: '10px',
    marginBottom: '15px'
  },
  a: {
    ...globalcss.a,
    margin: '0 auto',
    fontSize: '100%',
    cursor: 'pointer',
    lineHeight: '10%'
  },
  p: {
    ...globalcss.p,
    fontSize: '90%',
    color: '#799cb9'
  },
  textarea: globalcss.textarea,
  pre: {
    ...globalcss.p,
    fontSize: '105%',
    color: '#6dbb94'
  }
}
