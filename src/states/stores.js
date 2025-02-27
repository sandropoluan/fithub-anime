import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filters';
import pagination from './slices/pagination';
import animeList from './slices/animeList';

export const store = configureStore({
    reducer: {
        filter,
        pagination,
        animeList,
    }
});
