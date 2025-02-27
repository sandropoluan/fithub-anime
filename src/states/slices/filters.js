import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    q:'',
    type: '',
    ratting: '',
    status: '',
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        resetFilter(state) {
            state = initialState;
        },
        setFilter(state, action) {
            const { key, value } = action.payload;
            state = {
                ...state,
                [key]: value,
            }
        }
    }
});

export const { reducers, resetFilter } = filterSlice.actions;
export default filterSlice.reducer;

