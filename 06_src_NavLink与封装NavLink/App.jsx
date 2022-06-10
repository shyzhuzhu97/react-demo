import React, {Component} from 'react'
import {Route} from "react-router-dom";
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
                <Route path="/home" component={Home}/>
                <Route path="/about" component={About}/>
            </div>
        )
    }
}