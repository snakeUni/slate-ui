import * as React from 'react'
import { CodeBlockProps } from './interface'

export function CodeBlock(props: CodeBlockProps) {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  )
}
