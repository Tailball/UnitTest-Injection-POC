import React from 'react';

class TodoItem extends React.Component {
    onRemove = () => {
        this.props.onRemove(this.props.todo.id);
    }

    render () {
        return (
            <div className="todoItem">
                <div className="todoData">
                    <h3>{this.props.todo.title}</h3>
                    <p>{this.props.todo.description}</p>
                </div>
                <button onClick={this.onRemove}>Remove</button>
            </div>
        );
    }
}

export default TodoItem;