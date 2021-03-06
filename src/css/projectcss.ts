import { globalcss } from './globalcss'
import { Project } from '../core/project'

export const projectcss: Project['style'] = {
  div: {
    marginTop: '40px',
    marginBottom: '30px'
  },
  img: {
    width: '80%'
  },
  a: {
    ...globalcss.a,
    fontSize: '100%'
  },
  p: {
    ...globalcss.p,
    fontSize: '100%',
    width: '70%',
    margin: '30px auto',
    lineHeight: '150%'
  },
  input: globalcss.input,
  button: {
    ...globalcss.button,
    color: '#2a334d',
    background: '#252633',
    border: '1px solid #282a36',
    marginTop: '5%',
    marginBottom: '5%'
  }
}
