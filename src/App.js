import React, { Component } from 'react';
import './App.css';
import Table from './table'
import AddTodo from './addTodo';
// import {todoData} from './firebase'
class  App extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {

    // var data = firebase.database().ref('node1/');
    // data.once('value').then(function(snapshot) {
    // console.log(snapshot.val())
    // })
    

    // console.log(todoData.once('value')
    //                             .then(function(snapshot) {
    //                               console.log(snapshot.val())
    //                             }));
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <Table></Table>
            <AddTodo></AddTodo>
          </div>
        </div>
      </div>
    );
  }
}
  


export default (App);