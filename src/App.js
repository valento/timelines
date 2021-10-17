import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Button } from 'semantic-ui-react'

import Top from './components/pages/top.js'
import Home from './components/pages/home.js'
import TimelinePage from './components/pages/timelines.js'

const App = ({ location,standalone=true }) => {
  return (
    <div className="container">
      {standalone && <Route location={location} path='/' component={Top} />}
      <Route location={location} path='/' exact component={Home} />
      <Route location={location} path='/timeline' exact component={Home} />
      <Route location={location} path='/timeline/:id' exact component={TimelinePage} />
    </div>
  )
}

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
}

export default App
