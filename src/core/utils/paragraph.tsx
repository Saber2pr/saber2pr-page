import React, { Props, CSSProperties } from 'react'

export interface Para extends Props<any> {
  content: string
  style: CSSProperties
}

export const Para = ({ content, style }: Para) => (
  <>
    {content.split('\n').map((line, index) => (
      <p style={style} key={index}>
        {line}
      </p>
    ))}
  </>
)
