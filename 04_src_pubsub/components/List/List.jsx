import React, {Component} from 'react';
import './List.css'
import PubSub from 'pubsub-js'

class List extends Component {
    render() {
        const {users, isFirst, isLoading, err} = this.state
        return (<div>
            {isFirst ? <h2>欢迎使用，请输入关键词</h2> : isLoading ? <h2>Loading中，请等待。。</h2> : err ? <h2>{err}</h2> : <div>
                {users.map(item => {
                    return (<div className="card">
                        <a rel="noreferrer" href={item.html_url} target="_blank">
                            <img alt="img" src={item.avatar_url} style={{width: '100px'}}/>
                        </a>
                        <p className="card-text">{item.login}</p>
                    </div>)
                })}
                <h2 style={{display: users.length === 0 ? "block" : "none"}}>暂无数据</h2>
            </div>}
        </div>)
    }
    componentDidMount() {
        this.token = PubSub.subscribe('search',(_,stateObj)=>{
            this.setState(stateObj)
        })
    }
    componentWillUnmount() {
        PubSub.unsubscribe(this.token)
    }

    state = {
        users: [],
        isFirst: true,
        isLoading: false,
        err: ''
    }
}

export default List;