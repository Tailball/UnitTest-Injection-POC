import React from 'react';
import { connect } from 'react-redux';

import TodoItem from './TodoItem';

import diContainer from '../../../diContainer';

class TodoList extends React.Component {
    onRemoveClick = (id) => {
        diContainer.dataLayer.todo.remove(id);
    }

    render() {
        const todos = this.props.todos;
        if(!todos)
            return null;

        return (
            todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} onRemove={this.onRemoveClick} />
            ))    
        );
    }
}

const mapStateToProps = (state) => ({
    todos: state.todos
});

export default connect(mapStateToProps)(TodoList);