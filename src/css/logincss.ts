import { Style } from '../core/utils/type'
import { globalcss } from './globalcss'

export const logincss: Style<
  'div' | 'p' | 'input' | 'a' | 'button' | 'hr' | 'bottom'
> = {
  div: {
    ...globalcss.div,
    width: '300px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '3%'
  },
  p: {
    ...globalcss.p,
    fontSize: '100%',
    margin: '10px auto'
  },
  input: {
    ...globalcss.input,
    margin: '10px auto'
  },
  a: {
    ...globalcss.a,
    fontSize: '80%'
  },
  button: {
    ...globalcss.button,
    border: '1px solid #282a36',
    color: '#2a334d',
    backgroundColor: '#191a21',
    padding: ''
  },
  hr: {
    ...globalcss.hr
  },
  bottom: {
    ...globalcss.bottom
  }
}
