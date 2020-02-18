import { ReactEditor } from 'slate-react'
import { Editor } from 'slate'

export interface BaseProps {
  attributes: any
  children?: React.ReactNode
}

export type SlateEditor = Editor & ReactEditor
