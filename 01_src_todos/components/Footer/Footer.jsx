import React, {Component} from 'react';
import './Footer.css'
class Footer extends Component {
    render() {
        const {todos} = this.props
        //已完成的个数
        const doneCount = todos.reduce((pre,todo)=> pre + (todo.done ? 1 : 0),0)
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" onChange={this.checkAll}/>
                </label>
                <span>
                     <span>已完成{doneCount}</span> / 全部{todos.length}
                 </span>
                <button onClick={()=>{this.props.deleteAllDoneTodos()}} className="btn btn-danger">清除已完成任务</button>
            </div>
        );
    }
    checkAll=(event)=>{
        this.props.checkAll(event.target.checked)
    }

}

export default Footer;