import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import './styles/App.css';

import AccountPortal from './components/account_portal/'
import ErrorPages from "./components/error";
import Lander from './components/lander'
import PanelsContainer from './components/panels_container'

function App()
{
  return (
          <Switch>
              <Route path="/" exact component={Lander}/>
              <Route path="/account" component={AccountPortal}/>
              <Route path="/panels" component={PanelsContainer}/>

              {/*
                Default Error Page
                TODO: Implement Error Page with Specific Error ID's and Messages
              */}
              <Route component={ErrorPages}/>
          </Switch>
  );
}

export default App;
