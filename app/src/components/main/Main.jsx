import React from 'react';
import { Switch, Route } from 'react-router-dom';

import GraphPage from '../graphPage/GraphPage.jsx';
import NotFoundPage from '../notFoundPage/NotFoundPage.jsx';

const Main = () => (
    <div>
        <Switch>
            <Route exact path='/' component={GraphPage} />
            <Route path='/users' component={GraphPage} />
            <Route path='/graph' component={GraphPage} />
            <Route path='*' component={NotFoundPage} />
        </Switch>
    </div>
    );

export default Main;
