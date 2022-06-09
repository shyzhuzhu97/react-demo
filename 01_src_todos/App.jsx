import React, {Component} from 'react'
import './App.css'
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Footer from "./components/Footer/Footer";

export default class App extends Component {
    render() {
        return (
            <div>
                <div className="todo-container">
                    <div className="todo-wrap">
                        <Header addMessage={this.addMessage}/>
                        <List todos={this.state.todos} changeDone={this.changeDone} deleteTodo={this.deleteTodo}/>
                        <Footer todos={this.state.todos} checkAll={this.checkAll} deleteAllDoneTodos={this.deleteAllDoneTodos}/>
                    </div>
                </div>
            </div>
        )
    }

    addMessage = (messageObj) => {
        this.setState({todos: [messageObj, ...this.state.todos]})
    }
    changeDone = (id, done) => {
        let todos = this.state.todos.map(item => {
            if (item.id === id) {
                return {...item, done: done}
            }
            return item
        })
        this.setState({
            todos:todos
        })
    }
    deleteTodo=(id)=>{
        let todos = this.state.todos.filter(item => {
            if (item.id !== id) {
                return item
            }
        })
        this.setState({
            todos:todos
        })
    }
    deleteAllDoneTodos=()=>{
        let todos = this.state.todos.filter(item => {
            if (item.done !== true) {
                return item
            }
        })
        this.setState({
            todos:todos
        })
    }
    checkAll=(flag)=>{
        console.log(flag)
        let todos = this.state.todos.map(item => {
                return {...item,done:flag}
        })
        this.setState({
            todos:todos
        })
    }
    state = {
        todos: [
            {id: '1', name: '吃饭', done: true},
            {id: '2', name: '睡觉', done: false},
            {id: '3', name: '上厕所', done: true},
            {id: '4', name: '玩游戏', done: false},
        ]
    }
}
