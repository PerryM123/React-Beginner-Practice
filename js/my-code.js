/* AppComponent */
class AppComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <TitleComponent/>
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
        Title here
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
  }
  render() {
    return (
      <div>
        <span>VALUE HERE</span>
        <div>
          <input type="button" value="+" />
        </div>
      </div>
    )
  }
}
/* /IncreaseValueComponent */
/* Render */
React.render(
  <AppComponent/>,
  document.getElementById('box')
);
/* // Render */