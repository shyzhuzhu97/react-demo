import React, {Component} from 'react';
import axios from "axios";

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
        this.props.search({isFirst:false,isLoading:true})
        const {value} = this.keyWord
        axios.get(`/api1/search/users?q=${value}`)
            .then(res => {
                this.props.search({isLoading:false,users:res.data.items})
            }, err => {
                this.props.search({isLoading:false,err:err.message})
            })
    }
}

export default Search;