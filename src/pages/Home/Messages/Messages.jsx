import React, {Component} from 'react';
import {Link, Route} from "react-router-dom";
import Detail from "./Detail/detail";

class Messages extends Component {
    state = {
        messages: [
            {id: "01", title: "你好张三", message: "我是你好张三的详情"},
            {id: "02", title: "你好李四", message: "我是你好李四的详情"},
            {id: "03", title: "你好王五", message: "我是你好王五的详情"},
            {id: "04", title: "你好刘六", message: "我是你好刘六的详情"},
        ]
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.messages.map((msg) => {
                            return <li key={msg.id}>
                                <Link to={`/home/messages/detail/${msg.id}`}>{msg.title}</Link>
                            </li>
                        })
                    }
                </ul>
                <hr/>
                <Route path="/home/messages/detail/:id" component={Detail}/>
            </div>
        );
    }
}

export default Messages;