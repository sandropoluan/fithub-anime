import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    currentActivePage: 1,
    funMode: false,
    lastForceUpdate: 0,
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setLoading(state, action) {
            state.loading = action.payload
        },
        increaseCurrentPageNumber(state) {
            state.currentActivePage = state.currentActivePage + 1;
        },
        decreaseCurrentPageNumber(state) {
            state.currentActivePage = state.currentActivePage - 1;
        },
        setPage(state, action) {
            state.currentActivePage = action.payload;
        },
        setFunMode(state, action) {
            state.funMode = action.payload;
        },
        forceUpdate(state) {
            state.lastForceUpdate = new Date().getTime();
        }
    }
});


export const { setLoading, increaseCurrentPageNumber, decreaseCurrentPageNumber, setPage, setFunMode, forceUpdate } = appSlice.actions;
export default appSlice.reducer;
