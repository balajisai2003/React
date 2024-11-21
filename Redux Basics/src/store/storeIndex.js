
import {createSlice, configureStore} from '@reduxjs/toolkit';


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

const initialCounterState = {counter:0, showToggle: true};

const counterSlice = createSlice({
    name:'counter',
    initialState: initialCounterState,
    reducers:{
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state,action){
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state){
            state.showToggle = !state.showToggle;
        }
    }
})

const initialAuthState = {
    isAuthenticated: false
};
const authSlice = createSlice({
    name:'auth',
    initialState: initialAuthState,
    reducers:{
        login(state){
            state.isAuthenticated = true;
        },
        logout(state){
            state.isAuthenticated = false;
        }
    }

})

const configStore = configureStore({
    reducer: {
        counter:counterSlice.reducer,
        auth: authSlice.reducer
    }
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default configStore;



