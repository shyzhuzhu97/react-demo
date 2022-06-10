import React, {Component} from 'react'
import {Link, Route} from "react-router-dom";
import Home from './components/Home/Home'
import About from './components/About/About'
export default class App extends Component {
    render() {
        return (
            <div>
                    <Link to="/home">Home</Link>
                    <div>&nbsp;</div>
                    <Link to="/about">About</Link>
                <hr/>
                    <Route path="/home" component={Home} />
                    <Route path="/about" component={About} />
            </div>
        )
    }
}
