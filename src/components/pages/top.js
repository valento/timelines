import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const Top = ({ lan }) => {
  return (
    <div className={`Top ${lan}`}>top ui: { lan }</div>
  )
}

Top.propTypes = ({
  lan: PropTypes.string.isRequired
})

const mapStateToProps = state => ({
  lan: state.settings.language
})

export default connect(mapStateToProps)(Top)
