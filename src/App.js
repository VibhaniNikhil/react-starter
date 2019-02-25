import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import DefaultLayout from './containers/DefaultLayout';

class App extends Component {
  render() {
    return (
      <HashRouter>
          <Switch>
            <Route path="/" name="Home" component={DefaultLayout} />
          </Switch>
      </HashRouter>
    );
  }
}


{/* <Route exact path="/register" name="Register Page" component={Register} />
    <Route exact path="/404" name="Page 404" component={Page404} />
    <Route exact path="/500" name="Page 500" component={Page500} />
    <Route path="/" name="Home" component={IsAuthenticate(DefaultLayout)} />  */}

export default App;
