import React from 'react';
import ReactDOM from 'react-dom';
//react-router
import { HashRouter, Route, Switch } from 'react-router-dom'
//redux
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'

//异步中间件
import thunk from 'redux-thunk'

import reducers from './reducers'

import './index.css';
import * as serviceWorker from './serviceWorker';

import asyncComponent from './asyncComponent'
const asyncMain = asyncComponent(()=>{ return import('./components/main')})

export const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : fn => fn
))

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <div id = "container">
        <Switch>
          <Route path='/index' component ={asyncMain}></Route>
        </Switch>
      </div>
    </HashRouter>
  </Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
