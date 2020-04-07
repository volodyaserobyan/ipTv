import React, { useState, useEffect } from 'react';
import Login from './components/Login/Login'
import DashBoard from './components/DashBoard/DashBoard'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import { isAuth } from './helpers/Utilities'
import PrivateRoute from './helpers/PrivateRoute'
import {
  NewLineModal,
  MagModal,
  DownloadModal,
  EditModal,
  ExtendModal,
  StatModal,
  EpgModal,
  LinkModal
} from './components/Modals'
import './App.scss';

const App = props => {
  const [logOut, setLogOut] = useState(false)

  useEffect(() => {
    if (props.logOutReducer != undefined && props.logOutReducer.message == 'Logout') {
      setLogOut(true)
    }
  }, [props.logOutReducer])

  return (
    <div className="App">
      {props.isOpenModalNewLine && <NewLineModal />}
      {props.isOpenModalMag && <MagModal />}
      {props.isOpenModal.isModalDropDown != undefined && props.isOpenModal.isModalDropDown && <DownloadModal />}
      {props.isOpenModal.isModalDropDownEdit != undefined && props.isOpenModal.isModalDropDownEdit && <EditModal />}
      {props.isOpenModal.isModalDropDownExtend != undefined && props.isOpenModal.isModalDropDownExtend && <ExtendModal />}
      {props.isOpenModal.isModalDropDownStat != undefined && props.isOpenModal.isModalDropDownStat && <StatModal />}
      {props.isOpenModal.isModalDropDownLink != undefined && props.isOpenModal.isModalDropDownLink && <LinkModal />}
      {props.isOpenModal.isModalDropDownEpg != undefined && props.isOpenModal.isModalDropDownEpg && <EpgModal />}
      <BrowserRouter>
        <Switch>
          <Route path={`${process.env.PUBLIC_URL}/`} component={Login} exact />
          <Route
            path={`${process.env.PUBLIC_URL}/dashboard`}
            render={() => (
              <>
                <PrivateRoute flag={isAuth} redirectPath={`${process.env.PUBLIC_URL}/`} path={`${process.env.PUBLIC_URL}/dashboard`} component={DashBoard} />
              </>
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isOpenModalNewLine: state.modalReducer.isModalNewLine,
    isOpenModalMag: state.modalReducer.isModalMag,
    isOpenModal: state.modalReducer,
    logOutReducer: state.logOutReducer.logOut
  }
}

export default connect(mapStateToProps)(App)