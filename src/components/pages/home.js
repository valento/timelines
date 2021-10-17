import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const Home = ({lan}) => {
  const state = {
    ui: {
      en: ['Wellcome'],
      es: [],
      bg: ['Добре дошли']
    }
  }

  return (
    <div className={`App ${lan}`}>
      <h2 className={lan}>Timeline Home Page</h2>
    </div>
  )
}

const mapStateToProps = state => ({
  lan: state.settings.language
})

export default connect(mapStateToProps)(Home)
