import { Props, CSSProperties } from 'react'

export type Cast<T, K> = { [P in keyof T]: K }

export interface Propsx<P extends Object = {}, S extends Object = {}>
  extends Props<any> {
  props?: P
  style?: Cast<S, CSSProperties>
}
