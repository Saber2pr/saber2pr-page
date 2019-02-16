import React from 'react'
import { Application } from '../Application'
import { LinkImg } from './utils/link'
import { Propsx } from './utils/type'

export const Project = ({
  props,
  style
}: Propsx<Application['project'], { a; img }>) => (
  <LinkImg props={props} style={style} />
)
