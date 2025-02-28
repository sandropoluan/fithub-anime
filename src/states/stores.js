import { configureStore } from '@reduxjs/toolkit';
import app from './slices/app';
import filter from './slices/filters';
import pagination from './slices/pagination';
import animeList from './slices/animeList';

export const store = configureStore({
    reducer: {
        app,
        filter,
        pagination,
        animeList,
    }
});
