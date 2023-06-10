let visibility = false;

let toggleVisibility = () => {
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

render();
