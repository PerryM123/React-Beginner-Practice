import React from 'react';
class NavigationComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav>
        <ul>
          <li><a href="./main">Main Page</a></li>
          <li><a href="./about">About Us</a></li>
        </ul>
      </nav>
    )
  }
}
export default NavigationComponent;