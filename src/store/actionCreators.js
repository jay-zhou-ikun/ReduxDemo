import { CHANGE_INPUT, ADD_INPUT,DELETE_INPUT, GET_LIST} from './actionTypes'
import axios from 'axios'

export const changeInputAction = (value) => ({
    type: CHANGE_INPUT,
    value
})

export const addItemAction = () => ({
    type: ADD_INPUT,
})

export const deleteItemAction = (index) => ({
    type: DELETE_INPUT,
    index
})

export const getListAction = (data) => ({
    type: GET_LIST,
    data
})

export const getTodoList = () => {
    return (dispatch) => {
    axios.get('https://easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList')
      .then((res) => {
        const data = res.data
        const action = getListAction(data)
        store.dispatch(action)
    })
    }

}
