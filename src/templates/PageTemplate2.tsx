import React from 'react';
import {Link} from 'react-router-dom';

export const PageTemplate2: React.FC = ({children}) => (
    <div className="page">        
        <div>Template 2</div>
        <div>
            <Link to="/">Home</Link>
            <Link to="/page1">Page1</Link>
            <Link to="/page2">Page2</Link>
            <Link to="/page3">Page3</Link>
            <Link to="/page4">Page4</Link>
        </div>
        <div>{ children }</div>
    </div>
)

export default PageTemplate2;