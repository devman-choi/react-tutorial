import React from 'react';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';

class Markdown extends React.Component {
  editorRef = React.createRef<Editor>();
  resultRef = React.createRef<HTMLDivElement>();

  handleClick = (): void => {
    if (this.resultRef.current !== null && this.editorRef.current !== null)
      this.resultRef.current.innerHTML = this.editorRef.current
        .getInstance()
        .getHtml();
  };

  render(): React.ReactNode {
    return (
      <>
        <Editor
          previewStyle="vertical"
          height="400px"
          initialEditType="markdown"
          initialValue="hello"
          ref={this.editorRef}
        />
        <button onClick={this.handleClick}>make bold</button>
        <div ref={this.resultRef}></div>
      </>
    );
  }
}
export default Markdown;
