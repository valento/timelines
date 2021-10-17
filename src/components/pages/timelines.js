import { useEffect } from 'react'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'

const TimelinePage = ({ match,user,lan }) => {

  return (
    <div className={`App ${lan}`}>
      <h1>Timeline: { match.params.id}</h1>
    <Button primary content={`Button: ${user}`} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: state.user.name
})

export default connect(mapStateToProps)(TimelinePage)
