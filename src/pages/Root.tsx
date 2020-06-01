import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import PageTemplate1 from 'templates/PageTemplate1';
import PageTemplate2 from 'templates/PageTemplate2';
import { Home, Page1, Page2, Page3, Page4 } from '.';

const Root: React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path={["/"]}>
                <PageTemplate1>
                    <Route exact path="/" component={Home}></Route>
                </PageTemplate1>
            </Route>
            <Route path={['/page1', '/page2']}>
                <PageTemplate1>
                    <Route path="/page1" component={Page1}></Route>
                    <Route path="/page2" component={Page2}></Route>
                </PageTemplate1>
            </Route>
            <Route path={['/page3', '/page4']}>
                <PageTemplate2>
                    <Route path="/page3" component={Page3}></Route>
                    <Route path="/page4" component={Page4}></Route>
                </PageTemplate2>
            </Route>
            
        </Switch>
    </BrowserRouter>
)

export default Root;