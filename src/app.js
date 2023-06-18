// App Component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.state = {
      todos: [],
      //todos: [],
    };
  }
  handleDelete(todo) {
    this.setState((prevState) => {
      return {
        todos: prevState.todos.filter((item) => item !== todo),
      };
    });
  }
  handlePick(todo) {
    alert(todo);
  }
  handleAdd(todo) {
    if (!todo) {
      return "Please write something here if you want to add a task.";
    } else if (this.state.todos.indexOf(todo) > -1) {
      return "This task is already on your list.";
    }
    this.setState((prevState) => {
      return {
        // concat doesn't influence the initial array like push does
        todos: prevState.todos.concat(todo),
      };
    });
  }
  render() {
    const title = "TODO lista";
    return (
      <div>
        <List
          title={title}
          todos={this.state.todos}
          hasOptions={this.state.todos.length > 0}
          handleDelete={this.handleDelete}
          handlePick={this.handlePick}
        />
        <AddTodo handleAdd={this.handleAdd} />
      </div>
    );
  }
}

// TodoList
class List extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        {this.props.hasOptions ? (
          <p>
            You have the following {this.props.todos.length} tasks to complete:
          </p>
        ) : (
          <p>You can chill. There are no tasks for you today.</p>
        )}
        <ul>
          {this.props.todos.map((todo) => (
            <Item
              key={todo}
              todoText={todo}
              handleDelete={this.props.handleDelete}
              handlePick={this.props.handlePick}
            />
          ))}
        </ul>
      </div>
    );
  }
}

class Item extends React.Component {
  render() {
    return (
      <div>
        <li>{this.props.todoText}</li>
        {/*arrow function helps to only run the function when the button is clicked, not immediately*/}
        <button onClick={() => this.props.handleDelete(this.props.todoText)}>
          Done
        </button>
        <button onClick={() => this.props.handlePick(this.props.todoText)}>
          Start Pomodoro for this
        </button>
      </div>
    );
  }
}

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.state = {
      error: undefined,
    };
  }
  handleAdd(e) {
    e.preventDefault();
    const todo = e.target.elements.todo.value.trim();
    const error = this.props.handleAdd(todo);

    this.setState(() => {
      return {
        error: error,
      };
    });
    e.target.elements.todo.value = "";
  }
  render() {
    return (
      <div>
        <h1>
          <strong>Add Todo Component</strong>
        </h1>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAdd}>
          <input type="text" name="todo"></input>
          <button>Add</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
