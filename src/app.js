// App Component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.state = {
      todos: props.todos,
    };
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem("todos");
      const todos = JSON.parse(json);

      if (todos) {
        this.setState(() => ({ todos }));
      }
    } catch (error) {
      // Do nothing at all
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos.length !== this.state.todos.length) {
      const json = JSON.stringify(this.state.todos);
      localStorage.setItem("todos", json);
    }
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
  }

  handleDelete(todoToDelete) {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((item) => item !== todoToDelete),
    }));
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

    // concat doesn't influence the initial array like push does
    this.setState((prevState) => ({ todos: prevState.todos.concat(todo) }));
  }

  render() {
    const user = {
      name: "Agi",
      location: "Budapest",
    };
    return (
      <div>
        <Header name={user.name} location={user.location} />
        <List
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

App.defaultProps = {
  todos: [],
};

// stateless functional component
const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>

      {props.name && props.location && (
        <h3>
          {props.name} from {props.location}
        </h3>
      )}
    </div>
  );
};

Header.defaultProps = {
  title: "TODO lista 📝",
};

const List = (props) => {
  return (
    <div>
      {props.hasOptions ? (
        <p>You have the following {props.todos.length} tasks to complete:</p>
      ) : (
        <p>You can chill. There are no tasks for you today.</p>
      )}
      <ul>
        {props.todos.map((todo) => (
          <Item
            key={todo}
            todoText={todo}
            handleDelete={props.handleDelete}
            handlePick={props.handlePick}
          />
        ))}
      </ul>
    </div>
  );
};

const Item = (props) => {
  return (
    <div>
      <li>{props.todoText}</li>
      {/*arrow function helps to only run the function when the button is clicked, not immediately*/}
      <button onClick={() => props.handleDelete(props.todoText)}>✔️</button>
      <button onClick={() => props.handlePick(props.todoText)}>
        Start Pomodoro for this
      </button>
    </div>
  );
};

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

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.todo.value = "";
    }
  }
  render() {
    return (
      <div>
        <h1>
          <strong>Add Todo</strong>
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
