import React, { Component } from 'react'
import { connect } from 'react-redux';
import {todoData} from './firebase'
import Todo from './Todo'


class table extends Component {
    constructor(props) {
        super(props);

       
        this.state = {
            dataFirebase: []
        }
    }
    componentWillMount() {
        todoData.on('value', (todos) => {
        var todoList =[]
            todos.forEach(element => {
                let key = element.key;
                let todoName = element.val().todoName;
                let isDone = element.val().isDone;
                todoList.push(
                    {
                        key: key,
                        todoName: todoName,
                        isDone: isDone
                    }
                )
            })
            this.setState({
                dataFirebase:todoList
            })
        })
    }
    showTodos = ()=> {

        if(this.state.dataFirebase) {
            return this.state.dataFirebase.map((value, key) => {
                return (
                    <Todo
                        i = {key}
                        todo = {value}
                        todoName = {value.todoName}
                     />  
                )
            })
        }
         
    }
    render() {
        return (
            <div className="col-8">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col">Name</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.showTodos()
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}



const mapDispatchToProps = (dispatch)=> {
    return {
        DoneTodo : () => {
            dispatch({type:"DONE"})
        }
    }
}


export default connect(mapDispatchToProps)(table)
// export default table