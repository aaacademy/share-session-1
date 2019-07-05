import { 
    createStore, 
    combineReducers, 
    applyMiddleware 
} from 'redux'
import wineReducer from './wine.reducer'
import thunk from 'redux-thunk';

const combine = combineReducers({
    wineReducer
})

const Store = createStore( combine, applyMiddleware(thunk) )

export default Store