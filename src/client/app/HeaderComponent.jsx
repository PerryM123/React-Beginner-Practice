import React from 'react';
import { Link } from 'react-router-dom'

class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav>
        <ul>
          <li><Link to='/'>Main Page</Link></li>
          <li><Link to='/about-us'>About Us</Link></li>
        </ul>
      </nav>
    )
  }
}
export default HeaderComponent;