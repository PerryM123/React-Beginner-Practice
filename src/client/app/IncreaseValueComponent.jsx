import React from 'react';
/* IncreaseValueComponent */
class IncreaseValueComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.change = this.change.bind(this);
  }
  change(e) {
    this.setState({ value: this.state.value + 1 });
  }
  render() {
    return (
      <div className="user-portion">
        <span>{this.state.value}</span>
        <div>
          <input type="button" value="+" onClick={this.change} />
        </div>
      </div>
    )
  }
}
/* /IncreaseValueComponent */
export default IncreaseValueComponent;