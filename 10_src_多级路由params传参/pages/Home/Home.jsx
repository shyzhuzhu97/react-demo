import React, {Component} from 'react';
import MyNavLink from "../../components/MyNavLink/MyNavLink";
import {Redirect, Route, Switch} from "react-router-dom";
import News from './News/News'
import Messages from './Messages/Messages'

class Home extends Component {
    render() {
        return (
            <div>
                <h3>我是home</h3>
                <hr/>
                <MyNavLink
                    style={{display: "inline-block", margin: "5px", cursor: "pointer", textDecoration: "underline"}}
                    to={"/home/news"}>news</MyNavLink>
                <MyNavLink
                    style={{display: "inline-block", margin: "5px", cursor: "pointer", textDecoration: "underline"}}
                    to={"/home/messages"}>messages</MyNavLink>
                <hr/>
                <Switch>
                    {/*默认使用的是模糊匹配*/}
                    {/*exact 严格匹配 有需要再开*/}
                    <Route path="/home/news" component={News}/>
                    <Route path="/home/messages" component={Messages}/>
                    {/*redirect 当所有路由都匹配不上的时候，匹配redirect的路由，作为兜底*/}
                    <Redirect to="/home/news"/>
                </Switch>
            </div>
        );
    }
}

export default Home;