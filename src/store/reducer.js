import { CHANGE_INPUT,ADD_INPUT,DELETE_INPUT, GET_LIST} from './actionTypes'

const defaultState = {
    inputValue:'Write something',
    list:[
    // '早八点开晨会， 分配今天的代码任务',
    // '早九点和项目经理开需求沟通会',
    // '早九点和项目经理开需求沟通会'
    ]
}
export default (state = defaultState, action) => {

    // console.log(state,action)

    //Reducer里只能接受state, 不能改变state
    if(action.type === CHANGE_INPUT) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue=action.value
        return newState
    }

    if (action.type === ADD_INPUT) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue=''
        return newState
    }

    if (action.type === DELETE_INPUT) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        return newState
    }

    if (action.type === GET_LIST) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list = action.data.data.list
        return newState
    }

    return state
}