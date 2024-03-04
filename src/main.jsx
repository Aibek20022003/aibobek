import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ReduxApp from './ReduxApp.jsx'
import { Provider } from 'react-redux'
import store from './redux/index.js'




ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <Provider store={store}>
    <App/>
    <ReduxApp/>
    
  </Provider>
  </>,
)
