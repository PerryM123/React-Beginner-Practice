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
/* NavigationComponent */
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
/* /NavigationComponent */
/* AboutUsComponent */
class AboutUsComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>About Us Page</h2>
        <p>Author Information: </p>
      </div>
    )
  }
}
/* /AboutUsComponent */
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
/* Render */
React.render(
  <AppComponent/>,
  document.getElementById('react-app')
);
/* // Render */