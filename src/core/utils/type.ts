import { Props, CSSProperties } from 'react'

export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>

export type Style<K extends keyof any = ''> = Record<K, CSSProperties>

export interface Propsx<P extends Object = {}, K extends keyof any = ''>
  extends Props<any> {
  props?: P
  style?: Style<K>
}
