import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/header/header.component.jsx';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route 
                exact path = "/"
                    component = { HomePage }
                /> 
                <Route exact path = "/shop"
                    component = { ShopPage }
                /> 
            </Switch>
       </BrowserRouter>
    );
}

export default App;