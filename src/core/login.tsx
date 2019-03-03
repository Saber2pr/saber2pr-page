import React, { Props } from 'react'
import { Style } from './utils/type'
import { Anchor } from './utils/anchor'
import { Button } from './utils/button'
import { Input } from './utils/input'

export interface Login extends Props<any> {
  style: Style<'div' | 'p' | 'input' | 'a' | 'button' | 'hr' | 'bottom'>
  onSuccess: () => void
}

interface User {
  id: string
  password: string
}

const pass = (user: User): boolean => {
  const users: User[] = [
    {
      id: 'saber2pr',
      password: '123'
    }
  ]
  const target = users.find(u => u.id === user.id)
  if (target) {
    if (user.password === target.password) {
      return true
    } else {
      alert('密码错误！')
      return false
    }
  } else {
    alert('用户不存在！')
    return false
  }
}

export const Login = ({ style, onSuccess }: Login) => {
  const { div, p, input, button, a, bottom, hr } = style
  const user: User = {
    id: '',
    password: ''
  }
  const resolve = () => {
    if (user.id === '') {
      alert('id不能为空！')
    } else if (user.password === '') {
      alert('密码不能为空!')
    } else {
      pass(user) ? onSuccess() : null
    }
  }
  return (
    <div style={div}>
      <form
        onSubmit={e => {
          e.preventDefault()
          resolve()
        }}
      >
        <p style={p}>{'登录'}</p>
        <hr style={hr} />
        <div>
          <Input
            style={input}
            defaultValue="请输入id...(saber2pr)"
            onChange={e => (user.id = e.target.value)}
          />
        </div>
        <div>
          <Input
            style={input}
            defaultValue="请输入密码...(123)"
            onChange={e => (user.password = e.target.value)}
          />
        </div>
        <br />
        <div>
          <Button style={button} name="确定" />
          <Button style={button} name="游客身份" onClick={onSuccess} />
        </div>
        <br />
        <div>
          <Anchor
            style={a}
            name="没有帐号？注册>>"
            href="#"
            onClick={register}
          />
        </div>
      </form>
      <br />
      <hr style={hr} />
      <div style={bottom}>{'saber2pr.github.io'}</div>
    </div>
  )
}

const register = () => {
  alert('暂不支持注册！敬请期待！')
}
