import { combineReducers } from 'redux'
import {loopReducer} from './loopReducer'

export const rootReducer = combineReducers({
  loopModule: loopReducer
})
