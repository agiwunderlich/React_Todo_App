// App Component
class App extends React.Component {
  render() {
    const title = "TODO lista";

    const todos = ["thing 1", "thing2", "thing3"];
    return (
      <div>
        <List title={title} todos={todos} />
        <AddTodo />
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
        <ul>
          {this.props.todos.map((todo) => (
            <Item key={todo} todoText={todo} />
          ))}
        </ul>
      </div>
    );
  }
}

class Item extends React.Component {
  handleRemove() {
    alert("handleRemove");
  }
  render() {
    return (
      <div>
        <li>{this.props.todoText}</li>
        <button onClick={this.handleRemove}>Done</button>
      </div>
    );
  }
}

class AddTodo extends React.Component {
  handleAddTodo(e) {
    e.preventDefault();
    const todo = e.target.elements.todo.value.trim();
    if (todo) {
      alert(todo);
    }
  }
  render() {
    return (
      <div>
        <h1>
          <strong>Add Todo Component</strong>
        </h1>
        <form onSubmit={this.handleAddTodo}>
          <input type="text" name="todo"></input>
          <button>Add</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
