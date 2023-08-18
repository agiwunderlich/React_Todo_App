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
      todos: props.todos
    };
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      try {
        var json = localStorage.getItem("todos");
        var todos = JSON.parse(json);

        if (todos) {
          this.setState(function () {
            return { todos: todos };
          });
        }
      } catch (error) {
        // Do nothing at all
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.todos.length !== this.state.todos.length) {
        var json = JSON.stringify(this.state.todos);
        localStorage.setItem("todos", json);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      console.log("Component Will Unmount");
    }
  }, {
    key: "handleDelete",
    value: function handleDelete(todoToDelete) {
      this.setState(function (prevState) {
        return {
          todos: prevState.todos.filter(function (item) {
            return item !== todoToDelete;
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

      // concat doesn't influence the initial array like push does
      this.setState(function (prevState) {
        return { todos: prevState.todos.concat(todo) };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var user = {
        name: "Agi",
        location: "Budapest"
      };
      return React.createElement(
        "div",
        null,
        React.createElement(Header, { name: user.name, location: user.location }),
        React.createElement(List, {
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

App.defaultProps = {
  todos: []
};

// stateless functional component
var Header = function Header(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      props.title
    ),
    props.name && props.location && React.createElement(
      "h3",
      null,
      props.name,
      " from ",
      props.location
    )
  );
};

Header.defaultProps = {
  title: "TODO lista 📝"
};

var List = function List(props) {
  return React.createElement(
    "div",
    null,
    props.hasOptions ? React.createElement(
      "p",
      null,
      "You have the following ",
      props.todos.length,
      " tasks to complete:"
    ) : React.createElement(
      "p",
      null,
      "You can chill. There are no tasks for you today."
    ),
    React.createElement(
      "ul",
      null,
      props.todos.map(function (todo) {
        return React.createElement(Item, {
          key: todo,
          todoText: todo,
          handleDelete: props.handleDelete,
          handlePick: props.handlePick
        });
      })
    )
  );
};

var Item = function Item(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "li",
      null,
      props.todoText
    ),
    React.createElement(
      "button",
      { onClick: function onClick() {
          return props.handleDelete(props.todoText);
        } },
      "\u2714\uFE0F"
    ),
    React.createElement(
      "button",
      { onClick: function onClick() {
          return props.handlePick(props.todoText);
        } },
      "Start Pomodoro for this"
    )
  );
};

var AddTodo = function (_React$Component2) {
  _inherits(AddTodo, _React$Component2);

  function AddTodo(props) {
    _classCallCheck(this, AddTodo);

    var _this2 = _possibleConstructorReturn(this, (AddTodo.__proto__ || Object.getPrototypeOf(AddTodo)).call(this, props));

    _this2.handleAdd = _this2.handleAdd.bind(_this2);
    _this2.state = {
      error: undefined
    };
    return _this2;
  }

  _createClass(AddTodo, [{
    key: "handleAdd",
    value: function handleAdd(e) {
      e.preventDefault();
      var todo = e.target.elements.todo.value.trim();
      var error = this.props.handleAdd(todo);

      this.setState(function () {
        return { error: error };
      });

      if (!error) {
        e.target.elements.todo.value = "";
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
            "Add Todo"
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
