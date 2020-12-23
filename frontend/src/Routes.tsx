import React from 'react';
import { Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Navbar from './core/componentes/Navbar';
import Home from './pages/Home';


const Routes = () => (
    <BrowserRouter>
    <Navbar />
    <Switch>
        <Route path="/">
            <Home />
        </Route>


    </Switch>
    
    
    </BrowserRouter>





);

export default Routes;