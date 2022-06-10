import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import './MyNavLink.css'
class MyNavLink extends Component {
    render() {
        return (
            <NavLink activeClassName="clicked" {...this.props}></NavLink>
        );
    }
}

export default MyNavLink;