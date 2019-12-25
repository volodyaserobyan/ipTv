import React from 'react';
import Login from './components/Login/Login'
import DashBoard from './components/Dashboard/DashBoard'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path={`${process.env.PUBLIC_URL}/`} component={Login} exact />
          <Route path={`${process.env.PUBLIC_URL}/dashboard`} component={DashBoard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
