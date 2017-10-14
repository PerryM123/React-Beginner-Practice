import React from 'react';

import TitleComponent from './TitleComponent.jsx';
import HeaderComponent from './HeaderComponent.jsx';
import IncreaseValueComponent from './IncreaseValueComponent.jsx';
import FooterComponent from './FooterComponent.jsx';

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
        <IncreaseValueComponent/>
        <FooterComponent/>
      </div>
    )
  }
}
/* /AppComponent */
export default AppComponent;