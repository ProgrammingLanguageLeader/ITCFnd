import React from 'react';
import { render } from 'react-dom';
import { injectGlobal } from 'styled-components';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Homepage from './components/Homepage';
import Timepage from './components/Timepage';

injectGlobal`
    body {
        margin: 0;
        font-family: "Open Sans", sans-serif;
    }

    header {
        background-image: url(img/bg.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        padding-bottom: 75px;
    }
`

render(
    <Router>
        <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/time' component={Timepage} />
        </Switch>
    </Router>,
    document.getElementById('root')
);