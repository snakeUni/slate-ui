import { Editor } from 'slate'
import { SlateEditor, EditorType } from '@slate-type'

export function isBoldMarkActive(editor: SlateEditor): boolean {
  const [match] = Editor.nodes(editor, {
    match: n => n.bold === true,
    universal: true
  })

  return !!match
}

export function isCodeBlockActive(editor: SlateEditor): boolean {
  const [match] = Editor.nodes(editor, {
    match: n => n.type === EditorType.CODE
  })

  return !!match
}
