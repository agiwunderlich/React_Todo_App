"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
  _inherits(Counter, _React$Component);

  // To wire up the onClick event handlers and bind them in the constructor of your Counter component,
  // you need to bind the methods to the component's instance.

  function Counter(props) {
    _classCallCheck(this, Counter);

    var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

    _this.plusOne = _this.plusOne.bind(_this);
    _this.minusOne = _this.minusOne.bind(_this);
    _this.reset = _this.reset.bind(_this);
    _this.state = {
      count: 0
    };
    return _this;
  }

  _createClass(Counter, [{
    key: "plusOne",
    value: function plusOne() {
      this.setState(function (prevState) {
        return {
          count: prevState.count + 1
        };
      });
    }
  }, {
    key: "minusOne",
    value: function minusOne() {
      this.setState(function (prevState) {
        return {
          count: prevState.count - 1
        };
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this.setState(function () {
        return {
          count: 0
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "Count: ",
          this.state.count,
          " "
        ),
        React.createElement(
          "button",
          { onClick: this.plusOne },
          "+1"
        ),
        React.createElement(
          "button",
          { onClick: this.minusOne },
          "-1"
        ),
        React.createElement(
          "button",
          { onClick: this.reset },
          "reset"
        )
      );
    }
  }]);

  return Counter;
}(React.Component);

ReactDOM.render(React.createElement(Counter, null), document.getElementById("app"));
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
