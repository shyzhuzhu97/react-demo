import React, {Component} from 'react'
import {Route, Switch} from "react-router-dom";
import Home from './pages/Home/Home'
import About from './pages/About/About'
import MyNavLink from "./components/MyNavLink/MyNavLink";

export default class App extends Component {
    render() {
        return (
            <div>
                <MyNavLink to={"/ths/home"}>Home</MyNavLink>
                <div>&nbsp;</div>
                <MyNavLink to={"/ths/about"}>About</MyNavLink>
                <hr/>
                <Switch>
                    <Route path="/ths/home" component={Home}/>
                    <Route path="/ths/about" component={About}/>
                    {/*多级路由下*/}
                    {/*解决样式丢失问题的三种解决办法：*/}
                    {/*1.去掉相对路径前的. （常用）*/}
                    {/*2.使用绝对路径%PUBLIC_URL%*/}
                    {/*3.使用HashRouter*/}
                </Switch>

            </div>
        )
    }
}