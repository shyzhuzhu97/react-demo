import React, {Component} from 'react';
import Item from "../Item/Item";
import './List.css'
import PropTypes from 'prop-types'
class List extends Component {
    render() {
        const {todos,changeDone,deleteTodo} = this.props
        return (
            <ul className="todo-main">
                {todos.map((todo) => {
                return <Item key={todo.id} todo={todo} changeDone={changeDone} deleteTodo={deleteTodo}/>
            })}
            </ul>
        );
    }
    static propTypes ={
        changeDone:PropTypes.func.isRequired,
        todos:PropTypes.array.isRequired,
        deleteTodo:PropTypes.func.isRequired,
    }
}

export default List;