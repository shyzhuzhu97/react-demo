import React, {Component} from 'react';
import './Item.css'

class Item extends Component {
    state = {mouseFlag:false,}

    render() {
        const {todo} = this.props
        return (
            <li onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)} onChange={this.changeDone(todo.id)}
            style={{background:this.state.mouseFlag?'#ddd':'none'}}>
                <label>
                    <input type="checkbox" defaultChecked={todo.done}/>
                    <span>{todo.name}</span>
                </label>
                <button className="btn btn-danger" style={{display:this.state.mouseFlag?'block':"none"}} onClick={this.deleteTodo(todo.id)}>删除</button>
            </li>
        );
    }

    handleMouse = (flag) => {
        return () => {
            this.setState({mouseFlag:flag})
        }
    }
    changeDone=(id)=>{
        return (event)=>{
            this.props.changeDone(id,event.target.checked)
        }
    }
    deleteTodo=(id)=>{
        return ()=>{
            this.props.deleteTodo(id)
        }
    }


}

export default Item;