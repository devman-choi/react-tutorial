import React from 'react';
import Markdown from 'components/atoms/Markdown/Markdown';
import mdFile from 'README.md';

const Home: React.FC = () => <Markdown mdFile={mdFile}></Markdown>;

export default Home;
