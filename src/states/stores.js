import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './slices/filters';

export const store = configureStore({
    reducer: {
        filter: filterReducer,
    }
});
