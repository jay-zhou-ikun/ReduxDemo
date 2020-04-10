import React, { Component } from "react";
import store from './store'
// import { CHANGE_INPUT,ADD_INPUT,DELETE_INPUT} from './store/actionTypes'
import {getTodoList, changeInputAction, addItemAction, deleteItemAction, getListAction } from './store/actionCreators'
import TodoListUI from './TodoListUI'
import axios from 'axios'

// const data = [
//     '早八点开晨会， 分配今天的代码任务',
//     '早九点和项目经理开需求沟通会',
//     '早九点和项目经理开需求沟通会'
    
// ]

class TodoList extends Component {
    
    constructor(props) {
        super(props)
        console.log(store.getState())
        this.state = store.getState()
        this.changeInputValue = this.changeInputValue.bind(this)
        this.storeChange = this.storeChange.bind(this)
        this.clickBtn = this.clickBtn.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        store.subscribe(this.storeChange)
    }

  render() {
    return (
      <TodoListUI 
        InputValue= {this.state.InputValue}
        changeInputValue = {this.changeInputValue}
        clickBtn = {this.clickBtn}
        list = {this.state.list}
        deleteItem = {this.deleteItem}
      />
    );
  }

  componentDidMount() {
    const action = getTodoList()
    store.dispatch(action)
    
  }

  storeChange() {
    this.setState(store.getState())
  }

  changeInputValue(e) {
    //   console.log(e.target.value)
     const action = changeInputAction(e.target.value)
    // const action = {
    //     type: CHANGE_INPUT,
    //     value:e.target.value
    // }
    store.dispatch(action)
  }

  storeChange() {
      this.setState(store.getState())
  }

  clickBtn() {
    //   console.log('jsp')
    const action = addItemAction()
    // const action = {type: ADD_INPUT}
    store.dispatch(action)
  }
  deleteItem(index) {
    // console.log(index)
    const action = deleteItemAction(index)
    // const action ={
    //   type: DELETE_INPUT,
    //   index
    // }
    store.dispatch(action)
  }
}


export default TodoList;
