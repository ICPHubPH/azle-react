import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import parser from 'html-react-parser';

export default function CreatePost() {
    const [content, setContent] = useState<string>('');

    function handleContent(value: string) {
        setContent(value);
    }

  return (
    <div>
        <ReactQuill
            theme="snow"
            value={content}
            onChange={handleContent}
            placeholder="Enter scholarship details here..."
            className="mb-4"
          />
          <div>{parser(content)}</div>
    </div>
  )
}
