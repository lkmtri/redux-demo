import { createStore, combineReducers } from 'redux'

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

const combinedReducer = combineReducers({
    counter: counterReducer
})

const store = createStore(combinedReducer)

export default store
