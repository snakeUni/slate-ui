import * as React from 'react'
import { RenderLeafProps } from 'slate-react'

export default function Leaf({ children, attributes }: RenderLeafProps) {
  return <span {...attributes}>{children}</span>
}
