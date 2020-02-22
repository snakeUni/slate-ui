import React, { useMemo, useState } from 'react'
import { createEditor } from 'slate'
// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from 'slate-react'
import { toggleCodeBlock } from '@slate-utils'
import { EditorType } from '@slate-type'
import { CodeBlock, DefaultComponent } from '@slate-ui'
import './App.css'

function App() {
  const editor = useMemo(() => withReact(createEditor()), [])
  // Keep track of state for the value of the editor.
  const [value, setValue] = useState([
    {
      type: 'paragraph',
      children: [{ text: 'A line of text in a paragraph.' }]
    }
  ])
  return (
    <div className="app">
      <Slate editor={editor} value={value} onChange={value => setValue(value as any)}>
        <Editable
          onKeyDown={event => {
            if (event.key === '`' && event.ctrlKey) {
              event.preventDefault()
              // Determine whether any of the currently selected blocks are code blocks.
              toggleCodeBlock(editor, EditorType.PARAGRAPH)
            }
          }}
          renderElement={props => {
            switch (props.element.type) {
              case EditorType.CODE: {
                return <CodeBlock {...props} />
              }

              default: {
                return <DefaultComponent {...props} />
              }
            }
          }}
        />
      </Slate>
    </div>
  )
}

export default App
