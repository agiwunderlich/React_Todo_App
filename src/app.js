// App Component
class App extends React.Component {
  render() {
    const title = "TODO lista";

    const options = ["thing 1", "thing2", "thing3"];
    return (
      <div>
        <List title={title} />
        <Item options={options} />
        <AddTodo title="Ez az add todo form" />
      </div>
    );
  }
}

// TodoList
class List extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <b>List Component</b>
        </h1>
        <p>{this.props.title}</p>
      </div>
    );
  }
}

class Item extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <strong>ITEM Component</strong>
        </h1>
        <p>{this.props.options.length}</p>
        <ul>
          {this.props.options.map((option) => (
            <li key={option}>{option}</li>
          ))}
        </ul>
      </div>
    );
  }
}

class AddTodo extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <strong>Add Todo Component</strong>
        </h1>
        <p>{this.props.title}</p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
