import React from 'react';

import TitleComponent from './TitleComponent.jsx';
import HeaderComponent from './HeaderComponent.jsx';
import IncreaseValueComponent from './IncreaseValueComponent.jsx';
import FooterComponent from './FooterComponent.jsx';
import AboutUsComponent from './AboutUsComponent.jsx';

import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

/* AppComponent */
class AppComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="box">
        <TitleComponent title="First React App"/>
        <HeaderComponent/>
        <Switch>
          <Route exact path='/' component={IncreaseValueComponent}/>
          <Route exact path='/about-us' component={AboutUsComponent}/>
        </Switch>
        <FooterComponent/>
      </div>
    )
  }
}
/* /AppComponent */
export default AppComponent;