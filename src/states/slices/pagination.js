import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    "last_visible_page": 0,
    "has_next_page": true,
    "current_page": 0,
    "items": {
        "count": 0,
        "total": 0,
        "per_page": 0
    }
}

const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        setPaginationData(state, action) {
            return action.payload;
        }
    }
});

export const { setPaginationData } = paginationSlice.actions;
export default paginationSlice.reducer;