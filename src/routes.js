import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/main';
import Calculator from './pages/calculator';
import About from './pages/about';
import Header from './layout/Header'
import ApiList from './pages/apiList'
import Item from './pages/apiList/Item'

function Routes() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/calculator" component={Calculator} />
                <Route path="/about" component={About} />
                <Route exact path="/apiList" component={ApiList} />
                <Route path="/apiList/item/:id" component={Item} />
            </Switch>
        </BrowserRouter>
    );

}
export default Routes;