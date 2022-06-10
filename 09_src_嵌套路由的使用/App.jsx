import React, {Component} from 'react'
import {Route, Switch,Redirect} from "react-router-dom";
import Home from './pages/Home/Home'
import About from './pages/About/About'
import MyNavLink from "./components/MyNavLink/MyNavLink";

export default class App extends Component {
    render() {
        return (
            <div>
                <MyNavLink to={"/home"}>Home</MyNavLink>
                <div>&nbsp;</div>
                <MyNavLink to={"/about"}>About</MyNavLink>
                <hr/>
                <Switch>
                    {/*默认使用的是模糊匹配*/}
                    {/*exact 严格匹配 有需要再开*/}
                    <Route path="/home" component={Home}/>
                    <Route path="/about" component={About}/>
                    {/*redirect 当所有路由都匹配不上的时候，匹配redirect的路由，作为兜底*/}
                    <Redirect to="/home"/>
                </Switch>

            </div>
        )
    }
}