import React, {Component} from 'react'
import Search from "./components/Search/Search";
import List from "./components/List/List";

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <Search search={this.search}/>
                <List {...this.state}/>
            </div>
        )
    }

    search = (stateObj) => {
        this.setState(
            stateObj
        )
    }


}
