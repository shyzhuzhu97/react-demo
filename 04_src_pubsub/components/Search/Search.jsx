import React, {Component} from 'react';
import axios from "axios";
import PubSub from 'pubsub-js'
class Search extends Component {
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={c => this.keyWord = c} type="text" placeholder="enter the name you search"/>&nbsp;
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        );
    }

    search = () => {
        PubSub.publish('search',{isFirst: false, isLoading: true})
        const {value} = this.keyWord
        axios.get(`/api1/search/users?q=${value}`)
            .then(res => {
                PubSub.publish('search',{isLoading: false, users: res.data.items})
            }, err => {
                PubSub.publish('search',{isLoading: false, err: err.message})
            })
    }
}

export default Search;