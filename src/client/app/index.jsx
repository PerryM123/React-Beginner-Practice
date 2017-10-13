import React from 'react';
import {render} from 'react-dom';

import AppComponent from './AppComponent.jsx';
import AwesomeComponent from './AwesomeComponent.jsx'; // do I need
import AboutUsComponent from './AboutUsComponent.jsx'; // do I need
// import AwesomeComponent from './AwesomeComponent.jsx';
// ...
class App extends React.Component {
  render () {
    return (
      <div>
        <AppComponent />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));