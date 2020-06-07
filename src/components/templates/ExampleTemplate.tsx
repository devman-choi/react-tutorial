import React from 'react';
import { Button } from 'components/atoms';
interface ExampleTemplateProps {
  title?: string;
}
const ExampleTemplate: React.FC<ExampleTemplateProps> = ({ title, children }) => {
  return (
    <div className="example-container">
      <div className="example-page">
        <div className="example-control">
          <Button
            type="dark"
            onClick={(): void => {
              window.history.back();
            }}
          >
            &lt; Back
          </Button>
          <Button
            type="success"
            onClick={(): void => {
              window.history.back();
            }}
          >
            Next &gt;
          </Button>
        </div>
        <div className="example-title">{title}</div>
        <div className="example-content">{children}</div>
      </div>
    </div>
  );
};
export default ExampleTemplate;
