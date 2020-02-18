import { Transforms, Text, Editor } from 'slate'
import { SlateEditor, EditorType } from '@slate-type'
import { isBoldMarkActive, isCodeBlockActive } from './is'

export function toggleBoldMark(editor: SlateEditor) {
  const isActive = isBoldMarkActive(editor)
  Transforms.setNodes(
    editor,
    { bold: isActive ? null : true },
    { match: n => Text.isText(n), split: true }
  )
}

export function toggleCodeBlock(editor: SlateEditor) {
  const isActive = isCodeBlockActive(editor)
  Transforms.setNodes(
    editor,
    { type: isActive ? null : EditorType.CODE },
    { match: n => Editor.isBlock(editor, n) }
  )
}
