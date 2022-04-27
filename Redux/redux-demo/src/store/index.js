
import { configureStore } from "@reduxjs/toolkit";

import counterReducer from './counter';
import authReducer from './auth';


const store = configureStore({
    reducer:{counter:counterReducer, auth:authReducer}
});



export default store;

// const counterSubscriber = () =>{
//     const latestState = store.getState();
//     console.log(latestState);
// }

// store.subscribe(counterSubscriber);

// store.dispatch({action:'increment'});
// store.dispatch({action:'decrement'});
