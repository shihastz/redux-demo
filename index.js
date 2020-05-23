const redux = require('redux')
const createStore = redux.createStore

//action
const BUY_CAKE = 'BUY_CAKE'

function buyCake() {
    return{
        type : BUY_CAKE,
        info : 'First redux action'
    }
    
}

//reducer
const initialState = {
    numOfCakes : 10
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                numOfCakes : state.numOfCakes - 1
            }
    
        default:
            return state
    }
}

//store
const store = createStore(reducer)
console.log('initial state', store.getState())

const unsubscribe = store.subscribe(() => console.log('updated state', store.getState()))

store.dispatch(buyCake())

unsubscribe()