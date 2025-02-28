import { createSlice } from "@reduxjs/toolkit";

const animeListSlice = createSlice({
    name: 'animeList',
    initialState: [],
    reducers: {
        setList(state, action){
            return action.payload;
        }
    }
});

export const { setList } = animeListSlice.actions;
export default animeListSlice.reducer;