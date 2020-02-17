import * as React from 'react'
import { BaseProps } from '@slate-type'

export function DefaultComponent(props: BaseProps) {
  return <p {...props.attributes}>{props.children}</p>
}
