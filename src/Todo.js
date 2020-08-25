import React, { Component } from 'react'
import { connect } from 'react-redux'

 class Todo extends Component {
    checkDone = () => {
        if(this.props.todo["isDone"] === true) 
            return (<td><p><s>{this.props.todoName}</s></p></td>)

        return (<td><p>{this.props.todoName}</p></td>)
    }
    doneAction = () => {
        // this.props.doneTodo();
        console.log(this.props.todo["isDone"]);
        this.props.todo["isDone"] = !this.props.todo["isDone"]

        this.props.updateDone(this.props.todo)
    }
    deleteAction = () => {
        this.props.delete(this.props.todo)

    }
    render() {
        
        return (
            <tr>
                <td>{this.props.i}</td>
                {/* <td><p className="text-decoration-line-through">{this.props.todoName}</p></td> */}
                {this.checkDone()}
                <td>
                    <div className="btn-group">
                        <button type="button" onClick={() =>this.doneAction()} className="btn btn-outline-secondary">Done</button>
                        <button type="button" onClick={()=>this.deleteAction()} className="btn btn-outline-danger">Delete</button>
                    </div>
                </td>
            </tr>
        )
    }
}
//onClick={() => this.props.DoneTodo()}

const mapStateToProps = (state) => ({
    isDone : state.isDone
})

const mapDispatchToProps = (dispatch) => {
    return {
        updateDone : (doneItem) => {
            dispatch({type:"UPDATE_DONE",doneItem})
        },
        delete : (deleteItem) => {
            dispatch({type:"DELETE", deleteItem})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)