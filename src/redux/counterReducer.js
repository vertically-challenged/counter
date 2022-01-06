import { INCREMENT } from './types'

const initialState = {
    count: 0
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT: 
            console.log(state)
        default: return state
    }

    return state
}

export default counterReducer