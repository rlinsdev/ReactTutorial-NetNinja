const React = require('react');
const ReactDOM = require('react-dom');
const createReactClass = require('create-react-class');

//Create a component - values in page
const TodoComponent = createReactClass({
  getInitialState: function () {
    return {
      todos: ['wash Up', 'Take a Nup', 'value 1', 'value 2'],
    };
  }, // getInitialState
  render: function () {
    let todos = this.state.todos;

    todos = todos.map(
      function (item, index) {
        return <TodoItem item={item} key={index} onClick={this.clicked} onDelete={this.onDelete} />;
      }.bind(this)
    );

    // Senting de tvalue
    return (
      <div id='todo-list'>
        <p onClick={this.clicked}>aaaaa clique</p>
        <ul>{todos}</ul>
      </div>
    );
  },
  // custom functions
  onDelete: function (item) {
    const updatedTodos = this.state.todos.filter(function (val, index) {
      return item !== val;
    });
    this.setState({
      todos: updatedTodos,
    });
  },
  clicked: function () {
    console.log('TestClick');
  },
});

// Create TodoItem component
const TodoItem = createReactClass({
  render: function () {
    return (
      <li>
        <div className='todo-item'>
          <span className='item-name'>{this.props.item} </span>
          <span className='item-delete' onClick={this.handleDelete}> 
            x 
          </span>
        </div>
      </li>
    );
  },
  // Custom function
  handleDelete: function () {
    this.props.onDelete(this.props.item);
  },
});

// Put component into HTML page
ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));
