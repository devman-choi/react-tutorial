import React from 'react';

interface PageTemplateProps {
  title: string;
}
const PageTemplate: React.FC<PageTemplateProps> = ({ title, children }) => {
  return (
    <div className="page-container">
      <div className="page">{children}</div>
    </div>
  );
};

export default PageTemplate;
