import uiReducer from './ui-slice';
import cartReducer from './cart-slice';

import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {ui: uiReducer, cart: cartReducer}
})

export default store;