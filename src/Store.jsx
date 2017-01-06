import { createStore, combineReducers } from 'redux'

// initial state = 0
const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREASE_COUNTER':
            return state + 1;
        case 'DECREASE_COUNTER':
            return state - 1;
        default:
            return state
    }
}


// initialState = {
//     counter: 0
// }
const combinedReducer = combineReducers({
    counter: counterReducer
})

// this is the actual store
const store = createStore(combinedReducer)

export default store
