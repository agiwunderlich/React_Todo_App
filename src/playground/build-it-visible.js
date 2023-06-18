// creating a new Component and setting up state
// VisibilityToggle Component - render, constructor, set the default state, handleToggleVisibility

class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.state = {
      visibility: false,
    };
  }
  handleToggle() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility,
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggle}>
          {" "}
          {this.state.visibility ? "Hide Details" : "Show Details"}{" "}
        </button>
        {this.state.visibility ? <p>"Here are the details"</p> : undefined}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));

/* let toggleVisibility = () => {
  visibility = !visibility;
  render();
};

const render = () => {
  const jsx = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleVisibility}>
        {visibility ? "Hide Details" : "Show Details"}
      </button>
      {visibility ? <p>"Here are the details"</p> : undefined}
    </div>
  );


  ReactDOM.render(jsx, document.getElementById("app"));
};

render(); */
