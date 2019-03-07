import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class Header extends React.Component {
  render () {
    const url = this.props.match.url
    return (
      <header>
        <nav>
          <ul>
            <li><Link to={`${url}`}>通信</Link></li>
            <li><Link to={`${url}/reactRedux`}>redux</Link></li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default withRouter(Header)
