import { Transforms, Text, Editor } from 'slate'
import { SlateEditor, EditorType } from '@slate-type'
import { isBoldMarkActive, isCodeBlockActive } from './is'

export function toggleBoldMark(editor: SlateEditor, targetType: EditorType) {
  const isActive = isBoldMarkActive(editor)
  Transforms.setNodes(
    editor,
    { bold: isActive ? targetType : true },
    { match: n => Text.isText(n), split: true }
  )
}

export function toggleCodeBlock(editor: SlateEditor, targetType: EditorType) {
  const isActive = isCodeBlockActive(editor)
  Transforms.setNodes(
    editor,
    { type: isActive ? targetType : EditorType.CODE },
    { match: n => Editor.isBlock(editor, n) }
  )
}
