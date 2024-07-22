/* eslint-disable */
import 'react-app-polyfill/stable'
import 'core-js'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import authReducer from './store/reducer/auth'
import roleReducer from './store/reducer/role'
//import store from './store'
import { combineReducers, createStore ,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import permissionReducer from './store/reducer/permission'
import RolePermissionReducer from './store/reducer/RolePermission'
import FileReducer from './store/reducer/uploadReducer'
import employeeReducer from './store/reducer/Employee'
import folderReducer from './store/reducer/folderReducer';
const rootReducer = combineReducers({
  auth:authReducer,
  permissions:permissionReducer,
  role:roleReducer,
  RolePermission:RolePermissionReducer,
  file:FileReducer,
  folder:folderReducer,
  emp:employeeReducer,
 
 })
 const store =createStore(rootReducer,applyMiddleware(ReduxThunk));
 
 
 

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
