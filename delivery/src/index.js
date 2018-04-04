import React from 'react';
import {render} from 'react-dom';
import { injectGlobal } from 'styled-components';

import Main from './components/Main';

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

render(<Main/>, document.getElementById('main'))