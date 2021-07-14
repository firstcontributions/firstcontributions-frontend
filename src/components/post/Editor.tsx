import React, { useRef } from 'react'
import EditorJs from 'react-editor-js'
import { EDITOR_JS_TOOLS } from './editorJsTools'

export interface PostEditorProps {
  data: any
}

const Editor = ({ data }: PostEditorProps) => {
  const instanceRef = useRef(null)

  async function handleSave() {
    const savedData = await instanceRef.current.save()

    console.log('savedData', savedData)
  }

  return (
    <>
      <EditorJs
        onChange={handleSave}
        instanceRef={(instance) => (instanceRef.current = instance)}
        tools={EDITOR_JS_TOOLS}
        data={data}
      />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSave}>Publish</button>
    </>
  )
}

export default Editor
