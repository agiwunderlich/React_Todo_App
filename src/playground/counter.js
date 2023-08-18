class Counter extends React.Component {
  // To wire up the onClick event handlers and bind them in the constructor of your Counter component,
  // you need to bind the methods to the component's instance.

  constructor(props) {
    super(props);
    this.plusOne = this.plusOne.bind(this);
    this.minusOne = this.minusOne.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {
      count: props.count,
    };
  }
  plusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }
  minusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      };
    });
  }
  reset() {
    this.setState(() => {
      return {
        count: 0,
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count} </h1>

        <button onClick={this.plusOne}>+1</button>
        <button onClick={this.minusOne}>-1</button>
        <button onClick={this.reset}>reset</button>
      </div>
    );
  }
}

Counter.defaultProps = {
  count: 0,
};

ReactDOM.render(<Counter />, document.getElementById("app"));
/* const container = document.getElementById("app");
const root = createRoot(container);
root.render(<Counter />); */

/* let count = 0;

const minusOne = () => {
  count--;
  CounterApp();
};

const plusOne = () => {
  count++;
  CounterApp();
};

const reset = () => {
  count = 0;
  CounterApp();
};

const CounterApp = () => {
  const template = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={minusOne}>-1</button>
      <button onClick={plusOne}>+1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
  ReactDOM.render(template, document.getElementById("app"));
};

CounterApp(); */
