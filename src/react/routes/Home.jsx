import React from 'react';

import TodoList from '../components/todo/TodoList';
import diContainer from '../../diContainer';


class Home extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            newTitle: '',
            newDescription: ''
        }
    }

    onAddTodo = () => {
        diContainer.dataLayer.todo.add({
            title: this.state.newTitle,
            description: this.state.newDescription
        });

        this.setState({
            newTitle: '',
            newDescription: ''
        });
    }

    onChangeTitle = (e) => {
        this.setState({
            newTitle: e.target.value
        });
    }

    onChangeDescription = (e) => {
        this.setState({
            newDescription: e.target.value
        });
    }

    render () {
        return (
            <section className="page home">
                <div className="home-wrapper">
                    <h1>Home</h1>
                    <h2>A basic todo list</h2>

                    <div className="todo-addnew">
                        <input id="input-title"
                               type="text" 
                               onChange={this.onChangeTitle} 
                               value={this.state.newTitle} 
                               placeholder="add title..." />

                        <input id="input-description"
                               type="text"
                               onChange={this.onChangeDescription} 
                               value={this.state.newDescription} 
                               placeholder="add description..." />

                        <button onClick={this.onAddTodo}>Add new</button>
                    </div>
                    
                    <TodoList />
                </div>
            </section>
        );
    }
}

export default Home;