import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import {BrowserRouter,Switch, Route} from 'react-router-dom';

const HatsPage = () =>(
  <div>
    <h1>Hats Page</h1>
  </div>
);


function App() {
  return (
      <BrowserRouter>
       <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/hats" component={HatsPage}/>
       </Switch> 
      </BrowserRouter>
  );
}

export default App;
