import React, { Props, CSSProperties } from 'react'

export interface Para extends Props<any> {
  content: string
  style: CSSProperties
}

export const Para = ({ content, style }: Para) => (
  <>
    {content.split('\n').map(line => (
      <p style={style} key="jssk84u20tjlxz2s2ych">
        {line}
      </p>
    ))}
  </>
)
