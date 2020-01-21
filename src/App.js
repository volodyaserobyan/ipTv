import React from 'react';
import Login from './components/Login/Login'
import DashBoard from './components/DashBoard/DashBoard'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import NewLineModal from './components/Clients/Lines/NewLineModal'
import './App.scss';

const App = props => {
  return (
    <div className="App">
      {props.isOpenModal && <NewLineModal />}
      <BrowserRouter>
        <Switch>
          <Route path={`${process.env.PUBLIC_URL}/`} component={Login} exact />
          <Route path={`${process.env.PUBLIC_URL}/dashboard`} component={DashBoard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isOpenModal: state.modalReducer.isModal
  }
}

export default connect(mapStateToProps)(App)