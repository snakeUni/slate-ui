import React, { useMemo, useState } from 'react'
import { createEditor } from 'slate'
// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from 'slate-react'
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
            if (event.key === '&') {
              // Prevent the ampersand character from being inserted.
              event.preventDefault()
              // Execute the `insertText` method when the event occurs.
              editor.insertText('and')
            }
          }}
        />
      </Slate>
    </div>
  )
}

export default App
