import React, { Component } from 'react'
import { connect } from 'react-redux';

class addTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoName: '',
            isDone:false
        }
    }
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        console.log(name)
        console.log(value)
        this.setState({
            [name]: value
        })
    }
    addData = (todoName) => {
        let item = {}
        item.todoName = todoName;
        item.isDone = this.state.isDone;
        // console.log(todoName) 
        // this.props.getData(item)
        console.log(item)
        this.props.addDataStore(item)
    }
    render() {
        return (
            <div className="col-4">
                <form>
                    <div className="form-group">
                        <h2>Add todos</h2>
                        <div className="input-group">
                            <input onChange={(event) => this.isChange(event)} name="todoName" type="text" className="form-control" />
                            <div className="input-group-append">
                                <button  onClick={() => this.addData(this.state.todoName)}  className="btn btn-outline-secondary" type="reset">Add</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            
        )
    }
}


const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => {
    return {
        addDataStore: (getItem) => {
            dispatch({type:"ADD_ITEM",getItem})
        }   
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps )(addTodo)
