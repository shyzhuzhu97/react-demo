import React, {Component} from 'react';
import './Header.css'
import {nanoid} from 'nanoid'
class Header extends Component {
    render() {
        return (
            <div className="todo-header">
                <input type="text" onKeyUp={this.handleKeyUp} placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        );
    }

    handleKeyUp = (event) => {
        const message = event.target.value
        if (event.keyCode !== 13) {
            return
        }
        if (message.trim() === '') {
            alert("输入不能为空")
            return
        }
        const messageObj = {id:nanoid(),name:message,done:false}
        this.props.addMessage(messageObj)
        event.target.value = null
    }
}

export default Header;