import React, { Component } from 'react';
import 'highlight.js/styles/vs2015.css';
import hljs from 'highlight.js';
import MarkdownIT from 'markdown-it';
import * as style from './Markdown.scss';
const cn = require('classnames/bind').bind(style);

const md = new MarkdownIT({
  highlight: (str: string, lang: string): string => {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return '<pre class="hljs"><code>' + hljs.highlight(lang, str, true).value + '</code></pre>';
      } catch (__) {}
    }

    return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
  }
});

let mdFile = '';
interface MarkDownProps {
  mdFile: string;
}
interface MarkDownState {
  markdown: string;
}

export default class Markdown extends Component<MarkDownProps, MarkDownState> {
  constructor(props: MarkDownProps) {
    super(props);
    mdFile = props.mdFile;
    this.state = {
      markdown: ''
    };
  }

  componentDidMount(): void {
    fetch(mdFile)
      .then(response => {
        return response.text();
      })
      .then(text => {
        this.setState({
          markdown: md.render(text)
        });
      });
  }
  render(): React.ReactNode {
    const { markdown } = this.state;
    return <div className={cn('markdown')} dangerouslySetInnerHTML={{ __html: markdown }}></div>;
  }
}
