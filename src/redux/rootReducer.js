import { combineReducers } from 'redux'

import countReducer from './countReducer'
import themeReducer from './themeReducer'

const rootReducer = combineReducers({
    count: countReducer, 
    theme: themeReducer
})

export default rootReducer