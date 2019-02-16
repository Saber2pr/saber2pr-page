import React from 'react'
import { Application } from '../Application'
import { Link } from './utils/link'
import { Propsx } from './utils/type'

export const About = ({
  props,
  style
}: Propsx<Application['about'], { a }>) => <Link props={props} style={style} />
