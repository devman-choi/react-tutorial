import React from 'react';

import Markdown from 'components/atoms/Markdown/Markdown';
import mdFile from './README.md';

const MainEx03: React.FC = () => {
  return <Markdown mdFile={mdFile}></Markdown>;
};

export default MainEx03;
