import React from 'react';
import {render} from 'react-dom';

import AppComponent from './AppComponent.jsx';
import { BrowserRouter } from 'react-router-dom';

class App extends React.Component {
  render () {
    return (
      <div>
        <AppComponent />
      </div>
    );
  }
}

render(
	<BrowserRouter>
		<App/>
	</BrowserRouter>, 
	document.getElementById('app'));