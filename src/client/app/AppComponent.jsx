import React from 'react';

import TitleComponent from './TitleComponent.jsx';
import NavigationComponent from './NavigationComponent.jsx';
import IncreaseValueComponent from './IncreaseValueComponent.jsx';

/* AppComponent */
class AppComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="box">
        <TitleComponent title="First React App"/>
        <NavigationComponent/>
        <IncreaseValueComponent/>
      </div>
    )
  }
}
/* /AppComponent */
export default AppComponent;