import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

//import 'semantic-ui-css/semantic.min.css'
//import './Timeline.css'

import App from './App'
import RootReducer from './reducers/root'
//import reportWebVitals from './reportWebVitals'

const { REACT_APP_TIMELINE_DEV:dev } = process.env

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const initState = {
  settings: {
    language: 'en'
  },
  timeline: {},
  user: {}
}

console.log('FrontEnd development:', dev)

const store = createStore(
  RootReducer,
  initState,
  enhancer(applyMiddleware(thunk))
)

const Root = (
  <Provider store={store}>
    <Router>
      <Route component={App} />
    </Router>
  </Provider>
)

// Render FrontEnd:

if( dev ) {
  ReactDOM.render(
    Root,
    document.getElementById('Timeline-div')
  )
} else {
  window.cleanTimlineApp = ( conrainerID ) => {
    ReactDOM.unmounrComponentAtNode(document.getElementById(containerID))
  }
  window.renderTimeline = ( containerID,history,token=null ) => {
    ReactDOM.render(
      (
        <Provider store={store}>
          <Router history={history}>
            <Route render={ token => <App standalone={token? false : true} /> } />
          </Router>
        </Provider>
      ),
      document.getElementById(containerID)
    )
  }
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

//reportWebVitals()
