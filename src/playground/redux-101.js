import { createStore } from "redux"

// AUSGANGSLAGE
// const incrementCount = ( payload = {}) => ({     
//     type: "INCREMENT",
//     incrementBy: typeof payload.incrementBy === "number" ? payload.incrementBy : 1
// })

// DESTRUCTURING 1. 
// const incrementCount = ({ incrementBy } = {}) => ({
//     type: "INCREMENT",
//     incrementBy: typeof incrementBy === "number" ? incrementBy : 1
// })

// DESTRUCTURING 2. --> default
// const incrementCount = ({ incrementBy = 1} = {}) => ({
//     type: "INCREMENT",
//     incrementBy: incrementBy
// })

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: "INCREMENT",
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: "DECREMENT",
    decrementBy
});

const resetCount = () => ({
    type: "RESET"
});

const setCount = ({ count } = {}) => ({
    type: "SET",
    count
});

// Reducers
// 1. Reducers are pure functions 
// 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                count: state.count + action.incrementBy
            }
        case "DECREMENT":
            return {
                count: state.count - action.decrementBy
            }
        case "SET":
            return {
                count: action.count
            }    
        case "RESET":
            return {
                count: state.count = 0
            }          
        default:
            return state;
    }
};

const store = createStore(countReducer)

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }))

store.dispatch(incrementCount());
store.dispatch(decrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount({ decrementBy: 45 }));

store.dispatch(setCount({ count: 234 }));
