
import { configureStore} from '@reduxjs/toolkit';
import counterReducer from './CounterStore';
import authReducer from './AuthStore';


// import {createStore} from 'redux';
// function redFunc (state = {counter:0, showToggle: true}, action){
//     if(action.type === 'increment'){
//         return {
//             counter: state.counter + 1,
//             showToggle: state.showToggle
//         }
//     }
//     if(action.type === 'decrement'){
//         return {
//             counter: state.counter - 1,
//             showToggle: state.showToggle
//         }
//     }
//     if(action.type === 'increase'){
//         return {
//             counter: state.counter + action.amount,
//             showToggle: state.showToggle
//         }
//     }

//     if(action.type === 'toggle'){
//         return {
//             counter: state.counter,
//             showToggle: !state.showToggle
//         }
//     }
    
//     return state;

// }

// const store = createStore(counterSlice.reducer);


// export default store;





const configStore = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer
    }
});


export default configStore;



