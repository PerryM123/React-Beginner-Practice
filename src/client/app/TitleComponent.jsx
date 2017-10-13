import React from 'react';
/* TitleComponent */
class TitleComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h2>
        {this.props.title}
      </h2>
    )
  }
}
/* /TitleComponent */
export default TitleComponent;