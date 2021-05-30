import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import UserSearch from './pages/UserSearch';
import ControlPanel from './pages/ControlPanel';
import CreditCard from './pages/CreditCard';
import NotFound from './pages/NotFound';

function App(){
 return (
     <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/userSearch" component={UserSearch}/>
            <Route exact path="/ControlPanel" component={ControlPanel}/>
            <Route exact path="/credit-card" component={CreditCard}/>
            <Route component={NotFound}/>
         </Switch>
     </BrowserRouter> 
 )
}
export default App;