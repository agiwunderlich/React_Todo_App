"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// App Component
var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.handleDelete = _this.handleDelete.bind(_this);
    _this.handlePick = _this.handlePick.bind(_this);
    _this.handleAdd = _this.handleAdd.bind(_this);
    _this.state = {
      todos: []
      //todos: [],
    };
    return _this;
  }

  _createClass(App, [{
    key: "handleDelete",
    value: function handleDelete(todo) {
      this.setState(function (prevState) {
        return {
          todos: prevState.todos.filter(function (item) {
            return item !== todo;
          })
        };
      });
    }
  }, {
    key: "handlePick",
    value: function handlePick(todo) {
      alert(todo);
    }
  }, {
    key: "handleAdd",
    value: function handleAdd(todo) {
      if (!todo) {
        return "Please write something here if you want to add a task.";
      } else if (this.state.todos.indexOf(todo) > -1) {
        return "This task is already on your list.";
      }
      this.setState(function (prevState) {
        return {
          // concat doesn't influence the initial array like push does
          todos: prevState.todos.concat(todo)
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var title = "TODO lista";
      return React.createElement(
        "div",
        null,
        React.createElement(List, {
          title: title,
          todos: this.state.todos,
          hasOptions: this.state.todos.length > 0,
          handleDelete: this.handleDelete,
          handlePick: this.handlePick
        }),
        React.createElement(AddTodo, { handleAdd: this.handleAdd })
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
      var _this3 = this;

      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          this.props.title
        ),
        this.props.hasOptions ? React.createElement(
          "p",
          null,
          "You have the following ",
          this.props.todos.length,
          " tasks to complete:"
        ) : React.createElement(
          "p",
          null,
          "You can chill. There are no tasks for you today."
        ),
        React.createElement(
          "ul",
          null,
          this.props.todos.map(function (todo) {
            return React.createElement(Item, {
              key: todo,
              todoText: todo,
              handleDelete: _this3.props.handleDelete,
              handlePick: _this3.props.handlePick
            });
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
    key: "render",
    value: function render() {
      var _this5 = this;

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
          { onClick: function onClick() {
              return _this5.props.handleDelete(_this5.props.todoText);
            } },
          "Done"
        ),
        React.createElement(
          "button",
          { onClick: function onClick() {
              return _this5.props.handlePick(_this5.props.todoText);
            } },
          "Start Pomodoro for this"
        )
      );
    }
  }]);

  return Item;
}(React.Component);

var AddTodo = function (_React$Component4) {
  _inherits(AddTodo, _React$Component4);

  function AddTodo(props) {
    _classCallCheck(this, AddTodo);

    var _this6 = _possibleConstructorReturn(this, (AddTodo.__proto__ || Object.getPrototypeOf(AddTodo)).call(this, props));

    _this6.handleAdd = _this6.handleAdd.bind(_this6);
    _this6.state = {
      error: undefined
    };
    return _this6;
  }

  _createClass(AddTodo, [{
    key: "handleAdd",
    value: function handleAdd(e) {
      e.preventDefault();
      var todo = e.target.elements.todo.value.trim();
      var error = this.props.handleAdd(todo);

      this.setState(function () {
        return {
          error: error
        };
      });
      e.target.elements.todo.value = "";
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
        this.state.error && React.createElement(
          "p",
          null,
          this.state.error
        ),
        React.createElement(
          "form",
          { onSubmit: this.handleAdd },
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
