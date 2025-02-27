import { createSlice } from "@reduxjs/toolkit";

const animeListSlice = createSlice({
    name: 'animeList',
    initialState: [],
    reducers: {
        setList(state, action){
            state = action.payload;
        }
    }
});

export const { setList } = animeListSlice.actions;
export default animeListSlice.reducer;