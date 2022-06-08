import React, {Component} from 'react';
import './Footer.css'
class Footer extends Component {
    render() {
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" onChange={this.checkAll}/>
                </label>
                <span>
                     <span>已完成0</span> / 全部{this.props.length}
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