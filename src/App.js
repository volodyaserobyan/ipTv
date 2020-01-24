import React from 'react';
import Login from './components/Login/Login'
import DashBoard from './components/DashBoard/DashBoard'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import NewLineModal from './components/Clients/Lines/NewLineModal'
import './App.scss';

const App = props => {
  console.log(props, 'app')
  return (
    <div className="App">
      {props.isOpenModal.isModal != undefined && props.isOpenModal.isModal.isModal && <NewLineModal />}
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
    isOpenModal: state.modalReducer
  }
}

export default connect(mapStateToProps)(App)