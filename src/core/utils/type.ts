import { CSSProperties } from 'react'

export type Style<K extends keyof any = ''> = Record<K, CSSProperties>
