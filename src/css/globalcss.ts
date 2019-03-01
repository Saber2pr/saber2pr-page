import { Style } from '../core/utils/type'

export const globalcss: Style<
  | 'img'
  | 'p'
  | 'a'
  | 'div'
  | 'button'
  | 'body'
  | 'bottom'
  | 'hr'
  | 'input'
  | 'textarea'
  | 'select'
  | 'option'
> = {
  body: {
    backgroundColor: '#191a21'
  },
  div: {
    boxShadow: '#000000 0px 5px 10px',
    backgroundColor: '#282a36',
    border: '1px solid #191a21',
    textAlign: 'center'
  },
  img: {
    width: '100px',
    borderRadius: '50%',
    overflow: 'hidden'
  },
  p: {
    marginTop: '30px',
    marginBottom: '30px',
    fontSize: '150%',
    color: '#f8ebc3',
    lineHeight: '160%',
    fontFamily: 'Microsoft Yahei'
  },
  a: {
    fontSize: '150%',
    width: '90px',
    lineHeight: '50px',
    borderRadius: '100%',
    color: '#6272a4',
    textDecoration: 'none'
  },
  button: {
    border: '1px solid #000000',
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px',
    padding: '6px 10px',
    cursor: 'pointer',
    outline: 'none'
  },
  bottom: {
    color: '#303957',
    fontSize: '100%',
    marginBottom: '10px'
  },
  hr: {
    color: '#944a73c0'
  },
  input: {
    marginTop: '30px',
    backgroundColor: '#191a21',
    color: '#2a334d',
    border: '1px solid #282a36'
  },
  textarea: {
    width: '90%',
    height: '320px',
    backgroundColor: '#282a36',
    border: '1px solid #2a334d',
    color: '#f8ebc3'
  },
  select: {
    border: '1px solid #282a36',
    backgroundColor: '#191a21',
    color: '#6272a4',
    appearance: 'none',
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    lineHeight: '20px'
  },
  option: {
    backgroundColor: '#191a21',
    color: '#6272a4'
  }
}
