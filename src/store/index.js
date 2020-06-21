import {createStore, combineReducers,applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import {TestingStoreReducer} from './Testing/reducers'
import {TranslationsStoreReducer} from './Translations/reducers'

// Create the redux logging middleware 
const loggerMiddleware = createLogger()






export default createStore(combineReducers({TestingStoreReducer,TranslationsStoreReducer}),applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )) 
