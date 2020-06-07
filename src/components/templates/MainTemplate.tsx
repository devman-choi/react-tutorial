import React from 'react';

interface MainTemplateProps {
  naviation: React.ReactNode;
  header: React.ReactNode;
}
export const MainTemplate: React.FC<MainTemplateProps> = ({ header, naviation, children }) => (
  <div className="main-template">
    <div className="main-header">{header}</div>
    <div className="main-container">
      <div className="main-navigator">{naviation}</div>
      <div className="main-content">{children}</div>
    </div>
  </div>
);

export default MainTemplate;
