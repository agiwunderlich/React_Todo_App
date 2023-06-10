"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// App Component
var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      var title = "TODO lista";

      var todos = ["thing 1", "thing2", "thing3"];
      return React.createElement(
        "div",
        null,
        React.createElement(List, { title: title, todos: todos }),
        React.createElement(AddTodo, null)
      );
    }
  }]);

  return App;
}(React.Component);

// TodoList


var List = function (_React$Component2) {
  _inherits(List, _React$Component2);

  function List() {
    _classCallCheck(this, List);

    return _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
  }

  _createClass(List, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          this.props.title
        ),
        React.createElement(
          "ul",
          null,
          this.props.todos.map(function (todo) {
            return React.createElement(Item, { key: todo, todoText: todo });
          })
        )
      );
    }
  }]);

  return List;
}(React.Component);

var Item = function (_React$Component3) {
  _inherits(Item, _React$Component3);

  function Item() {
    _classCallCheck(this, Item);

    return _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).apply(this, arguments));
  }

  _createClass(Item, [{
    key: "handleRemove",
    value: function handleRemove() {
      alert("handleRemove");
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "li",
          null,
          this.props.todoText
        ),
        React.createElement(
          "button",
          { onClick: this.handleRemove },
          "Done"
        )
      );
    }
  }]);

  return Item;
}(React.Component);

var AddTodo = function (_React$Component4) {
  _inherits(AddTodo, _React$Component4);

  function AddTodo() {
    _classCallCheck(this, AddTodo);

    return _possibleConstructorReturn(this, (AddTodo.__proto__ || Object.getPrototypeOf(AddTodo)).apply(this, arguments));
  }

  _createClass(AddTodo, [{
    key: "handleAddTodo",
    value: function handleAddTodo(e) {
      e.preventDefault();
      var todo = e.target.elements.todo.value;
      if (todo) {
        alert(todo);
      }
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
          React.createElement(
            "strong",
            null,
            "Add Todo Component"
          )
        ),
        React.createElement(
          "form",
          { onSubmit: this.handleAddTodo },
          React.createElement("input", { type: "text", name: "todo" }),
          React.createElement(
            "button",
            null,
            "Add"
          )
        )
      );
    }
  }]);

  return AddTodo;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));
