//Middleware

const redux = require('redux')
const reduxLogger = require('redux-logger')

const createStore = redux.createStore
const combineReducers = redux.combineReducers

const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

//action
const BUY_CAKE = 'BUY_CAKE'
const BUY_ICE_CREAM = 'BUY_ICE_CREAM'

function buyCake() {
    return{
        type : BUY_CAKE,
        info : 'First redux action'
    }
    
}

function buyIceCream() {
    return{
        type : BUY_ICE_CREAM,
        info : 'First redux action'
    }
    
}
//reducer
const initialCakeState = {
    numOfCakes : 10
}
const initialIceCreamState = {
    numOfIceCreams : 10
}
const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                numOfCakes : state.numOfCakes - 1
            }
    
        default:
            return state
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case BUY_ICE_CREAM:
            return {
                numOfIceCreams : state.numOfIceCreams - 1
            }
    
        default:
            return state
    }
}
//store
const rootReducer = combineReducers({
    cake : cakeReducer,
    iceCream : iceCreamReducer
})

const store = createStore(rootReducer, applyMiddleware(logger))
console.log('initial state', store.getState())

const unsubscribe = store.subscribe(() => {})

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())

//unsubscribe()