import { globalcss } from './globalcss'
import { About } from '../core/about'

export const aboutcss: About['style'] = {
  p: {
    ...globalcss.p,
    width: '80%',
    margin: '30px auto',
    fontSize: '95%'
  },
  a: globalcss.a,
  button: {
    ...globalcss.button,
    border: '1px solid #282a36',
    color: '#2a334d',
    backgroundColor: '#191a21',
    padding: '',
    marginTop: '30px',
    marginBottom: '20px'
  }
}
