import React, { Component } from 'react'; 
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css'
import Homepage from './components/Homepage';
import Catalog from './components/Catalog';

const NotFound404 = () => (
    <div>
        <h1>404</h1>
        <p>Страница не найдена</p>
    </div>
  );

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route exact path="/catalog" component={Catalog} />
                    <Route component={NotFound404} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;